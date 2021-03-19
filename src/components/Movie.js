import React, { Component } from 'react'

export class Movie extends Component {

    render() {

        return (
            <div className="movie-container">
                <img 
                className="poster" 
                src={this.props.movie.Poster} 
                alt='movie'>
                </img>
                    <p>{this.props.movie.Title}</p>
                    <p>Year: {this.props.movie.Year}</p>
                    <p>Type: {this.props.movie.Type}</p> 
            </div>
        )
    }
}

export default Movie