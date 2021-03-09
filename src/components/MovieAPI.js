import React, { Component } from 'react'

export class MovieAPI extends Component {
    fetchMovies = async () => {
        try{
            const url = 'http://www.omdbapi.com/?apikey=df23ef2';
            const response = await fetch(url);
            const data = await response.JSON()
            console.log(data);
        } catch (error){
            console.log(error);
        
        }
    }

    render() {
        return (
            <div>
                <h1>Movies</h1>
            </div>
        )
    }
}

export default MovieAPI
