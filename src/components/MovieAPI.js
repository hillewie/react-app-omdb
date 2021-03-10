import React, { Component } from 'react'
import Form from './Form';
import MovieList from './MovieList';



export class MovieAPI extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            movies: []
        };
    }
        
    fetchMovies = async () => {
       
        try {
            const url = 'http://www.omdbapi.com/?s=Avengers&apikey=df23ef2&';

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            this.setState({
                movies: data
            })
            
            
        } catch (error) {
            console.log(error);
        }
    }


    searchMovie = (newSearch) => {
        const searchResult = [
            ...this.state.movies,
            newSearch
        ]

        this.setState({
            movies: searchResult
        })
    }

  render() {
      const { movies } = this.state; 
      
    return (
        <div>
            <Form
                 searchMovie={this.searchMovie}
            />

            <MovieList />

            <h1>Movies</h1>
            <button onClick={this.fetchMovies}>Movies</button>
            <section>
                <div>{this.state.movies}</div>
            </section>
        
            
        
        </div>
        )
    }
}
export default MovieAPI 


