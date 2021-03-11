import React, { useState, useEffect } from 'react'
import Form from './Form';
import MovieList from './MovieList';

    const MovieAPI = () => {
        const [movies, setMovies ] = useState([]);
        const [searchValue, setSearchValue]= useState('');

        const FetchMovies = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=df23ef2`;

        const response = await fetch(url);
        const data = await response.json();
         

        if (data.Search){
            setMovies(data.Search); 
        };
    } 
        useEffect(() => {
            FetchMovies(searchValue);
        }, [searchValue]);
 


    return (
            <div>
                <div>
                    
                    <Form 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue}
                    />
                </div>

                <div>
                    <MovieList 
                    movies={movies} 
                    />
                </div>
            </div>
    )
}
  
// export class MovieAPI extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//             userInput: '',
//             movies: []
//         };
//     }
        
//     fetchMovies = async () => {
//         try {
//             const url = `http://www.omdbapi.com/?s=Harry&apikey=df23ef2`;
            
//             const response = await fetch(url);
//             const data = await response.json();
//             console.log(data);

//             const fetchUrl = [
//                 ...this
//             ]

//             this.setState({
//                 movies: data
//             })
            
            
//         } catch (error) {
//             console.log(error);
//         }
//     }


//     searchMovie = (newSearch) => {
//         const searchResult = [
//             ...this.state.movies,
//             newSearch
//         ]

//         this.setState({
//             movies: searchResult
//         })
//     }

//   render() {
//       const { movies } = this.state; 
      
//     return (
//         <div>
//             <Form 
//                  searchMovie={this.searchMovie}
//             />

//             <MovieList movies={this.movies} />

// <section>

// {movies.map((movie) => (
//         <article key={movies.id}>
//         <h2>{movies.Title}</h2>
//          </article>
// ))}
// </section>
       

            
//             <h1>Movies</h1>
//             <button onClick={this.fetchMovies}>Movies</button>
            
        
//         </div>
//         )
//     }
// }
export default MovieAPI 


