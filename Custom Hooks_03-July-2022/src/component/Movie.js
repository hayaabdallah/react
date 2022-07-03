import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Movie() {

  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const api = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc63f0c08d018cf26d4cf02b8efde4d7`);
      const dataa = await api.json();
      dataa.results.filter((data) => {
        if (data.id == id) {
          return setMovie(data)
        }
      })
    }
    fetching();
  }, [])
  console.log(Movie)

  return (



    <div class="col-lg-4 " >
      <div class="card-body">
        <img src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} className="card-img-top" alt="Card Image" />
        <h5 class="card-title">{movie.title}</h5>
        <p class="card-text">{movie.overview}</p>
        <p class="card-text">{movie.vote_average}</p>
      </div>
    </div>


  )



}

export default Movie;