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
        </div>
    )




 export default Form
 