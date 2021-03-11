import React from 'react'

const Movie = (props) => {

    return (
        <>
            {props.movies.map((movie) => (
                <div>
                    <img src={movie.Poster} alt='movie'></img>
                </div>
            ))}
        </>
    );      
}

export default Movie;
