import React, { Component } from 'react';
import MovieService from './MovieService';
import CategoryService from './CategoryService';
import { TextField, MenuItem } from '@material-ui/core'

export class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    Movie Name: <input type="text" required name="title" value={title} onChange={this.handleChange} />
                </label>
                <label>
                    Year: <input name="year" value={year} onChange={this.handleChange} />
                </label>
                <label>
                    Budget: <input name="budget" value={budget} onChange={this.handleChange} />
                </label>{this.state.categories ?
                    <React.Fragment>
                        <TextField
                            id=""
                            select
                            label="Select"
                            value={this.state.chosen}
                            onChange={this.handleCategoryChange}
                            helperText="Please select your movie genre"
                            margin="normal"
                        >
                            {this.state.categories.map(option => (
                                <MenuItem key={option.title} value={option.id}>
                                    {option.title}
                                </MenuItem>
                            ))}
                        </TextField>
                        <button onClick={this.addCategory}>Add</button>
                        {this.state.category_ids.map(id => {
                            let title = ''
                            for (let i = 0; i < this.state.categories.length; i++) {
                                if (this.state.categories[i].id == id) title = this.state.categories[i].title;
                            }
                            return (<h1>{title}</h1>)
                        })}
                    </React.Fragment>
                    : null}

                <button onClick={this.handleFormSubmit}>Submit Movie</button>
            </div>
        )
    }
}
