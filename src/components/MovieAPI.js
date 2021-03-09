import React, { Component } from 'react'
import Form from './Form';
import MovieList from './MovieList';

export class MovieAPI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userInput = '',
            type = ''
            } 
        }
        
    fetchMovies = async (searchForm) => {
        try {
            const url = 'http://www.omdbapi.com/?s={searchForm}&apikey=df23ef2';

            const response = await fetch(url);
            const data = await response.JSON()

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    handleSearch = (searchMovie) => {
        console.log('TodoApp->handleAddTodo(seachMovie)');
        console.log(searchMovie);

    }

    render() {
        console.log('MovieAPI->render()');

        return (
            <div>
                <h1>Movies</h1>

                <Form
                    fetchMovies={this.handleSearch}
                    handleSearch={this.handleSearch}
                />

                <MovieList />

            </div>

        )
    }
}

export default MovieAPI 