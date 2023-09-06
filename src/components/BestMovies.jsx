import Card from "./Card";
import axios from "axios";
import { useState, useEffect} from "react"

import "./BestMovies.css"

const BestMovies = () => {
    const [result, setResult] = useState([])
    const [getID, setGetID] = useState(0)
    const apiKey = '4d58cfce7093e670754f1a8a8ceac28f';
    const [type, setType] = useState("")
    const changeResource = [
      "movie/popular",
      "movie/top_rated",
      "movie/upcoming",
      "movie/now_playing",
      "trending/all/day",
      "trending/all/week",
    ]

    const searchMovie = (type) => {
      axios
        .get(`https://api.themoviedb.org/3/${type}?api_key=${apiKey}`)
        .then((response) => {
          setResult(response.data.results)
          setGetID(result.id)
        })
          
        .catch((error) =>{
          console.error(error)
        })
    } 

    const handleChangeResource = (type) => {
      searchMovie(type)
      setType(type)
    };

    useEffect(() => {
      searchMovie(changeResource[0])
      setType(changeResource[0])
    }, []); 

    return (
      <section className="container-template">
        <h1 className="best-h">Recomendações</h1>
        <p className="best-p">Descubra Filmes em destaque</p>
        <div className="select-best">
          <button className={type === changeResource[0] ? "button " + "button-active" : "button"} onClick={() => handleChangeResource(changeResource[0])}>Populares</button>
          <button className={type === changeResource[1] ? "button " + "button-active" : "button"} onClick={() => handleChangeResource(changeResource[1])}>Bem avaliados</button>
          <button className={type === changeResource[2] ? "button " + "button-active" : "button"} onClick={() => handleChangeResource(changeResource[2])}>Recentes</button>
          <button className={type === changeResource[3] ? "button " + "button-active" : "button"} onClick={() => handleChangeResource(changeResource[3])}>Em cartaz</button>
          <button className={type === changeResource[4] ? "button " + "button-active" : "button"} onClick={() => handleChangeResource(changeResource[4])}>Destaques do dia</button>
          <button className={type === changeResource[5] ? "button " + "button-active" : "button"} onClick={() => handleChangeResource(changeResource[5])}>Destaques da semana</button>
        </div>
        <div className="container-movies">
          {result.map((result, index) => (
            <Card
             key={index} 
             path={result.poster_path} 
             title={result.title}
             voteAverage={result.vote_average}
             id={result.id}
             />
          ))}
        </div>
      </section>
    );
  };
  

export default BestMovies