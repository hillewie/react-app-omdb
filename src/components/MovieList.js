import React from 'react'



const MovieList = (props) => {


    

  

    return (
        
        <div>
            {props.movies.map((movie, index) => (
                <div key={index} className="grid-container">
                    <div 
                    className="movie-container"
                    >
                        <img 
                        className="poster" 
                        src={movie.Poster} 
                        alt='movie'></img>
                        <p>{index.toString()}</p>
                        <p>{movie.Title}</p>
                        <p>Year: {movie.Year}</p>
                        <p>Type: {movie.Type}</p> 
                    </div>
                    
                </div>
            ))}
        </div>
    );      
}

export default MovieList;

