 import React, { Component } from 'react'
 
 export class Form extends Component {
     render() {
         return (
             <div>
                <form id="searchForm" onsubmit="event.preventDefault();getanswer();">
			        <h3 class="text-center">Begin the searching!</h3>
			        <input 
                        type="text"
                        name="movie"
                        value={this.state.userInput}
                        id="userinput" 
                        placeholder="Search Movies...">
                
                    </input>
		
			        <select 
                        name="type"
                        id="select-type"
                        value={this.state.type}>
                        
				        <option> Type </option>
				        <option value="movie"> Movies </option>
				        <option value="series"> Series </option>
				        <option value="documentrys"> Documentrys </option>
			        </select>
		
			<button id="search-btn">Search</button>
		</form>
             </div>
         )
     }
 }
 
 export default Form
 