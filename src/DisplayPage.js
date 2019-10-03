import React, { Component } from 'react';
import MovieService from './MovieService';
import DisplayCard from './DisplayCard';
import { Button } from '@material-ui/core'
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
    getAllData() {
        this.MovieService.getAll().then(resJSON => {
            this.setState({ movies: resJSON });
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