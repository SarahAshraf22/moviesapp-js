import React, { Component } from 'react';
import MovieService from './MovieService';
import DisplayCard from './DisplayCard';
import { Button, TextField, Paper } from '@material-ui/core'

import { NavLink } from 'react-router-dom';

export default class DisplayPage extends Component {
    constructor(props) {
        super(props);
        this.MovieService = new MovieService();
        this.state = {
            mName: '', mYear: '', mBudget: '',
            movies: [],
            MovieService: new MovieService()
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.getAllData();
    }

    getAllData(titleFilter) {
        this.MovieService.getAll(titleFilter).then(resJSON => {
            this.setState({ movies: resJSON });
        });

    }

    getCategories() {
        this.MovieService.getAllCategories().then(resJSON => {
            this.setState({ categories: resJSON });
        });
    }
    handleDelete(id, e) {
        console.log(id);
        this.MovieService.delete(id).then(resJSON => {
            this.getAllData();

        });
    }
    handleEdit(id, title, budget, year, category) {
        this.MovieService.edit(id, title, budget, year, category).then(resJSON => {
            this.getAllData();
        });
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    render() {

        return (
            <div className="cards-page">
                <NavLink to="/" style={{ textDecoration: 'none', color: 'secondary' }}>
                    <div className="navlink-button">
                        <Button
                            color="secondary"
                            className="edit-order-button"
                            title="EditOrder"
                            variant="outlined"
                        >
                            Add new movie
                        </Button>
                    </div>
                </NavLink>
                <div className="page-content">
                    <Paper className="searchbar">
                        <TextField
                            id=""
                            color="secondary"
                            label="Name"
                            className="form-fields"
                            value={this.state.titleFilter}
                            onChange={this.handleChange}
                            margin="normal"
                            fullWidth
                            name="titleFilter"
                        />
                        <Button
                            color="secondary"
                            className="edit-order-button"
                            title="EditOrder"
                            variant="contained"
                            onClick={() => {
                                this.getAllData(this.state.titleFilter)
                            }}
                        >
                            Apply Filter
                        </Button>
                    </Paper>
                    {this.state.movies ? this.state.movies.map(movies => {
                        return <DisplayCard ID={movies.id} movieName={movies.title} movieYear={movies.year} movieBudget={movies.budget}
                            handleDelete={() => this.handleDelete(movies.id)}
                            handleEdit={this.handleEdit} />
                    }) : null}
                </div>
            </div>
        )
    }
}