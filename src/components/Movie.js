import React from 'react'

function Movie() {
    return (
        <div>
            <img src="${input.Poster}"/>
                <h2>${input.Title}</h2>
                <ul class="list-group">
            <li class="list-group-item"><strong>Year released:</strong>${input.Year}</li>
            <li class="list-group-item"><strong>Type:</strong>${input.Type}</li>
            <li class="list-group-item"><strong>Imdb ID:</strong>${input.imdbID}</li>
            <li class="list-group-item"><strong>IMDB page:</strong><a href='https://www.imdb.com/title/${input.imdbID}/' target='_blank'> Home page</a></li>
          </ul>
        </div>
    )
}

export default Movie
