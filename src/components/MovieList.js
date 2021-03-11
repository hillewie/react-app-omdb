import React from 'react'

const MovieList = (props) => {

    return (
        <>
            {props.movies.map((movie) => (
                <div className="grid-container">
                    <div className="movie-container">
                        <img className="poster" src={movie.Poster} alt='movie'></img>
                        <h4>{movie.Title}</h4>
                        <p>Year:{movie.Year}</p>
                        <p>Type:{movie.Type}</p> 
                    </div>
                </div>
            ))}
        </>
    );      
}

export default MovieList;
