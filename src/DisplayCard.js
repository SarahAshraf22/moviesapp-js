import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
export default class DisplayCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            title: '',
            year: '',
            budget: ''
        }
    }
    componentDidMount() {
        this.setState({ title: this.props.movieName, year: Number(this.props.movieYear), budget: Number(this.props.movieBudget) })
    }
    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [input.name]: value });
    };

    render() {
        const { title, year, budget } = this.state
        return (
            <div className="card-wrapper" >
                <Card className="display-card">
                    <CardContent>
                        <div><h3>{this.props.movieName}</h3></div>
                        <div><p>Production Year: {this.props.movieYear}</p></div>
                        <div><p>Movie Budget: {this.props.movieBudget}</p></div>
                        <div className="card-buttons">
                            <Button color="secondary" onClick={this.props.handleDelete}>delete</Button>
                            <Button variant="contained" color="secondary" onClick={() => this.setState({ editing: !this.state.editing })}>edit</Button>
                        </div>
                        {this.state.editing ? <div>
                            <label>
                                Movie Name: <input type="text" required name="title" value={title} onChange={this.handleChange} />
                            </label>
                            <label>
                                Year: <input name="year" value={year} onChange={this.handleChange} />
                            </label>
                            <label>
                                Budget: <input name="budget" value={budget} onChange={this.handleChange} />
                            </label>
                            <button onClick={() => this.props.handleEdit(this.props.ID, this.state.title, this.state.year, this.state.budget)}>Submit Movie</button>
                        </div> : null}
                    </CardContent>
                </Card>

            </div>
        )
    }
}