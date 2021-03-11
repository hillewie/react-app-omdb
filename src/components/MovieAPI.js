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

export default MovieAPI 


