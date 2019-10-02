import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
export default class DisplayCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="card-wrapper" >
                <Card className="display-card">
                    <CardContent>
                        <div>{this.props.movieName}</div>
                        <div>{this.props.movieYear}</div>
                    </CardContent>
                </Card>

            </div>
        )
    }
}