import React, { Component } from 'react';
import DisplayCard from './DisplayCard';

export default class DisplayPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mName: '', mYear: '', mBudget: ''
        }
    }

    componentDidMount() {
        let numOfMovies = localStorage.getItem('MovieIndex')
        let Movies = []
        for (let i = 0; i < numOfMovies; i++) {
            let tempMovie = localStorage.getItem('movie' + i)
            tempMovie = JSON.parse(tempMovie)
            Movies.push(tempMovie)
        }
        this.setState({ Movies })

    }

    render() {

        return (
            <div className="cards-container">
                {/* {this.state.mName.map(e => {
                                return ( */}
                {/* <DisplayCard movieName={this.state.mName} movieYear={this.state.mYear} /> */}
                {/* )})} */}
                <h1>Movies</h1>
                {this.state.Movies ? this.state.Movies.map(movie => {
                    return <DisplayCard movieName={movie.mName} movieYear={movie.mYear} />
                }) : null}
            </div>
        )
    }
}