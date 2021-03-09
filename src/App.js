import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieAPI from './components/MovieAPI'

export default function App() {
    return (
        <div>
            <Header/>
            <MovieAPI/>
            <Footer/>
        </div>
    )
}
