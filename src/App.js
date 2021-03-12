import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieAPI from './components/MovieAPI'
import './style/Styling.css'

function App() {

  return (
        <div>
            <Header heading="NanBasHilFlix" />
            <MovieAPI />
            <Footer/>
        </div>
    )
} 

export default App; 
