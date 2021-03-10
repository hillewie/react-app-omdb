import React from 'react'
import Movie from './Movie'


const MovieList = (props) => {

    return (
        
        <div>
            <Movie/>


        {/* {props.movies.map((movie) => (

        <Movie
            // key={movie.id}
            // movie={movie}
            />
))} */}

);
        </div>
    )

}

export default MovieList 



// const MovieList = (props) => {

//         return(
//             {props.movie.map((movie, index) => {

//             <Movie
//                 key={movie.id}
//                 movie={movie}
//                 id={index}
//             />
//             );
//         }
//     });

//     console.log('MovieList->render()');

//     return (
//         <div>
//             <img src={movie.Poster} class="movie"/>
//             <h2>{movie.Title}</h2>
//         </div>
//     )  
// }
// export default MovieList

