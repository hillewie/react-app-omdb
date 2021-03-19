import React from 'react'
import Movie from './Movie'

const Form = (props) => (
            <div className="form">            
                <input 
                    className="form-input" 
                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    type="text"
                    placeholder="Type to search..."
                />

            {props.movies.map((movie, index) => (
               <div key={index} className="grid-container"> 
                    <Movie movie={movie}/>
               </div>
            ))}
            
            <div className="underline"></div>
        </div>
    )
 export default Form
 