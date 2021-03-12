 import React from 'react';

const Form = (props) => (
            <div className="form">

            
            <input 
            className="form-input" 
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            type="text"
            placeholder="Type to search..."
            />
        
        
            <label className="dropdown">
            <select name="Select" id="drop-down">
            <option value="All">All</option>
            <option value="Movie">Movies</option>
            <option value="Series">Series</option>
            <option value="Episode">Episode</option>
            </select>
        </label>
        
        
        <div className="underline"></div>
        </div>
    )




 export default Form
 