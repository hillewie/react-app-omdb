import React from 'react'
import Movie from './Movie'


const MovieList = (props) => {

    return (
        
        <div>
            {props.movies.map((movie, index) => (
               <div key={index} className="grid-container"> 
                    <Movie movie={movie}/>
               </div>
            ))}
        </div>
    )
}

export default MovieList;

