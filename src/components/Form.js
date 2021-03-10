 import React, { Component } from 'react'

 
 class Form extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           userInput: ''
       }
   }

    handleSearch = (event) => {
        event.preventDefault();
        const newSearch = {
            userInput: this.state.userInput,
        }
            this.props.searchMovie(newSearch)
    }
   

   render(){
      const { movies } = this.state; 
    return (
             <div>
                <form id="searchForm">
			        <h3>Begin the searching!</h3>
			            <input 
                            type="text"
                            value={this.state.userInput}
                            onChange={this.handleSearch}
                            placeholder="Search Movies..."
                        />
                    {/* <button onClick={this.handleSearch}>Movies</button> */}
		         </form>
             </div>
             
         )
 }
}
 
 export default Form
 