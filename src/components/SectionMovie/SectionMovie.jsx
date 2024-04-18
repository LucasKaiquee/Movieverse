import Card from "../Card/Card";
import axiosApi from "../../config/axios";
import { useState, useEffect} from "react"
import Loading from "../Loading/Loading";
import "./SectionMovie.css"
// import Pagination from "../Pagination/pagination";

const SectionMovie = () => {
  
    const [result, setResult] = useState([])
    const [type, setType] = useState("")

    const changeResource = [
      {
        name: "movie/popular",
        displayName: "Popular"
      },
      {
        name: "movie/top_rated",
        displayName: "Recomendações"
      },
      {
        name: "movie/upcoming",
        displayName: "Recentes"
      },
      {
        name: "movie/now_playing",
        displayName: "Em cartaz"
      },
      {
        name: "trending/all/day",
        displayName: "Destaques do dia"
      },
      {
        name: "trending/all/week",
        displayName: "Destaques da semana"
      },
    ]

    const searchMovie = async (resource) => {
        try{
          const response = await axiosApi.get(resource)
          setResult(response.data.results)
        } catch(error) {
          console.error(error)
        }
    } 

    const handleChangeResource = (type) => {
      searchMovie(type)
      setType(type)
    }

    useEffect(() => {
      searchMovie(changeResource[0].name)
      setType(changeResource[0].name)
    }, [])

    return (
      <section className="container-template">
        <h1 id="teste">Recomendações</h1>
        <p>Descubra Filmes em destaque</p>
        <div className="select">
          {
            changeResource.map((e, i) => (
              <button className={type === e.name ? "button " + "button-active" : "button"} key={i} onClick={() => {
                handleChangeResource(e.name)
                // setPage(1)
              }}>{e.displayName}</button>
            ))
          }
          
        </div>
        <div className="container-movies">
          {result.length > 0 ? result.map((result, index) => (
            <Card
             key={index} 
             path={result.poster_path} 
             title={result.title}
             voteAverage={result.vote_average}
             id={result.id}
             />
          )) : <div className="loading"><Loading /></div>}
        </div>

        {/* <div className="show-more">
            <button onClick={() => (setPage(page+1))}>Mostrar mais</button>
        </div> */}
      </section>
    );
  };
  

export default SectionMovie