import React, { Component } from 'react';

class SubmissionForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mName: '',
            mNames: [],
            mYear: '',
            mBudget: '',
            MovieIndex:0
        };

    }
    componentDidMount(){
        let newIndex=localStorage.getItem('MovieIndex')|0
        this.setState({MovieIndex:newIndex})
    }

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [input.name]: value });
    };



    handleFormSubmit = () => {

        const { mName, mYear, mBudget } = this.state
        const Movie={mName,mYear,mBudget}
        localStorage.setItem('movie'+this.state.MovieIndex,JSON.stringify(Movie))
        this.setState({MovieIndex:this.state.MovieIndex+1},()=>localStorage.setItem("MovieIndex",this.state.MovieIndex))
        


    };



    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Movie Name: <input name="mName" value={this.state.mName} onChange={this.handleChange} />
                </label>
                <label>
                    Year: <input name="mYear" value={this.state.mYear} onChange={this.handleChange} />
                </label>
                <label>
                    Budget: <input name="mBudget" value={this.state.mBudget} onChange={this.handleChange} />
                </label>
                <button type="submit">Submit Movie</button>
            </form>
        )
    }
}

export default SubmissionForm;