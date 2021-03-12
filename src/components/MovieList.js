import React from 'react'


const MovieList = (props) => {


    

  

    return (
        
        <div>
            {props.movies.map((movie, index) => (
                <div key={index} className="grid-container">
                    <ul className="movie-container">
                        <img 
                        className="poster" 
                        src={movie.Poster} 
                        alt='movie'></img>
                        <li>{index.toString()}</li>
                        <li>{movie.Title}</li>
                        <li>Year: {movie.Year}</li>
                        <li>Type: {movie.Type}</li> 
                    </ul>
                </div>
            ))}
        </div>
    );      
}

export default MovieList;

