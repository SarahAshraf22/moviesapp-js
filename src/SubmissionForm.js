import React, { Component } from 'react';
import MovieService from './MovieService';
import CategoryService from './CategoryService';
import { TextField, MenuItem, Paper, Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom';
class SubmissionForm extends Component {

    constructor(props) {
        super(props);
        this.MovieService = new MovieService();
        this.CategoryService = new CategoryService();
        this.state = {
            id: 0,
            title: '',
            year: '',
            budget: '',
            category_ids: [],
            MovieIndex: 0

        };

    }

    componentDidMount() {
        this.CategoryService.getAll().then(res => {
            console.log(res)
            this.setState({ categories: res })
        })
    }

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({ [input.name]: value });
    };

    handleCategoryChange = (evt) => {
        this.setState({ chosen: evt.target.value })
    }
    addCategory = () => {
        if (this.state.chosen) {
            let chosenArray = [...this.state.category_ids]
            let found = false;
            for (let i = 0; i < chosenArray.length; i++) {
                if (chosenArray[i] == this.state.chosen) found = true;
            }
            if (found) { }
            else {
                chosenArray.push(this.state.chosen)
                this.setState({ category_ids: chosenArray })
            }
        }
    }

    handleFormSubmit = () => {
        const { title, year, budget, category_ids } = this.state
        const movie = { title, year, budget, category_ids }
        this.MovieService.addNew(movie).then(json => {
            console.log("successful")
            this.setState({ movie: json })
        });
    };

    render() {
        const { title, year, budget } = this.state
        return (
            <div className="form-container">
                <NavLink to="/display" style={{ textDecoration: 'none', color: 'secondary' }}>
                    <div className="navlink-button">
                        <Button
                            color="secondary"
                            className="edit-order-button"
                            title="EditOrder"
                            variant="outlined"
                            name="title"
                        >
                            View movie list
                        </Button>
                    </div>
                </NavLink>
                <Paper className="form-paper">
                    <div>
                        <TextField
                            id=""
                            //required
                            label="Name"
                            className="form-fields"
                            value={title}
                            onChange={this.handleChange}
                            margin="normal"
                            name="title"
                        />
                        <TextField
                            id=""
                            //required
                            label="Year"
                            value={year}
                            onChange={this.handleChange}
                            margin="normal"
                            name="year"
                            style={{ float: 'right' }}
                        />
                        <TextField
                            id=""
                           //required
                            label="Budget"
                            value={budget}
                            onChange={this.handleChange}
                            margin="normal"
                            name="budget"
                        />
                    </div>{this.state.categories ?
                        <React.Fragment>
                            <div>
                                <TextField
                                    id=""
                                    select
                                    label="Select"
                                    fullWidth
                                    value={this.state.chosen}
                                    onChange={this.handleCategoryChange}
                                    helperText="Please choose your movie genre(s)"
                                    margin="normal"
                                >
                                    {this.state.categories.map(option => (
                                        <MenuItem key={option.title} value={option.id}>
                                            {option.title}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Button variant="outlined" onClick={this.addCategory}>Add Genre</Button>
                                {this.state.category_ids.map(id => {
                                    let title = ''
                                    for (let i = 0; i < this.state.categories.length; i++) {
                                        if (this.state.categories[i].id == id) title = this.state.categories[i].title;
                                    }
                                    return (<h3>{title}</h3>)
                                })}
                            </div>
                        </React.Fragment>
                        : null}
                    <div className="submit-button">
                        <Button variant="contained" color="secondary" onClick={this.handleFormSubmit}>Submit Movie</Button>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default SubmissionForm;