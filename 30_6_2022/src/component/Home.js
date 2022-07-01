import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = ()=>
{
    const {movie_id} = useParams();
    const [data , setData] = useState([]);
    useEffect(() => {

        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc63f0c08d018cf26d4cf02b8efde4d7')
          .then((response) => response.json())
          .then((data2) => {
            setData(data2.results)
    
    
          });
    
      },[]);
  console.log(data)

    return(
        <div className="row m-5 p-3">
    
        {data.map((a)=>( 
              <div class="col-lg-4 " >
         <div class="card-body">
              <img src={'https://image.tmdb.org/t/p/w500/'+ a.backdrop_path} className="card-img-top" alt="Card Image"/>
           <h5 class="card-title">{a.title}</h5>
           <p class="card-text">{a.overview}</p>
           {/* <Link to={'/movie/'+a.id} className="btn btn-success mt-auto align-self-start">Details</Link> */}
         </div>
         </div> 
         ))}
       
     
       </div> 


           
    )
}

export default Home;