import React from 'react'

function Movie() {
    return (
        <div>
            <img src='' />
                <h2></h2>
                <ul className="list-group">
            <li className="list-group-item"><strong>Year released:</strong></li>
            <li className="list-group-item"><strong>Type:</strong></li>
            <li className="list-group-item"><strong>Imdb ID:</strong></li>
            <li className="list-group-item"><strong>IMDB page:</strong><a href='https://www.imdb.com/title/${input.imdbID}/' target='_blank'> Home page</a></li>
          </ul>
        </div>
    )
}

export default Movie
