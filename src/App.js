import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieAPI from './components/MovieAPI'

function App() {

  return (
        <div>
            <Header heading="Movies" />
            <MovieAPI />
            <Footer/>
        </div>
    )
} 

export default App; 
