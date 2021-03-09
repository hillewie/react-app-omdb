import React from 'react'
import Movie from './Movie'

function MovieList(props) {
  const list =  props.movie.map((movie) => {
        if(userInput === handleSearch){
            return(<Movie
                key={movie.id}
                movie={movie}
            />);
        }else {
            return console.error(error);
        }
    });

    console.log('MovieList->render()');

    return (
        <div>
            <img src={movie.Poster} class="movie"/>
            <h2>{movie.Title}</h2>
        </div>
    )  
}
export default MovieList