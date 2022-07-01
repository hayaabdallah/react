import React,{useState,useEffect} from "react";


function Movie()
{

    const [movie , setMovie] = useState([]);
    useEffect(() => {

        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc63f0c08d018cf26d4cf02b8efde4d7')
          .then((response) => response.json())
          .then((data2) => {
            setMovie(data2.results)
    
    
          });
    
      },[]);
  console.log(Movie)
   
return (

    <div className="row m-5 p-3">
    

          <div class="col-lg-4 " >
     <div class="card-body">
          <img src={'https://image.tmdb.org/t/p/w500/'+ movie.backdrop_path} className="card-img-top" alt="Card Image"/>
       <h5 class="card-title">{movie.title}</h5>
       <p class="card-text">{movie.overview}</p>
  
     </div>
     </div> 

   
 
   </div> 


)



}

export default Movie;