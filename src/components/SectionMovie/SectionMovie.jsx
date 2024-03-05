import Card from "../Card/Card";
import axios from "axios";

import { useState, useEffect} from "react"
import "./SectionMovie.css"
// import Pagination from "../Pagination/pagination";

const SectionMovie = () => {
  
    const [result, setResult] = useState([])
    // const [page, setPage] = useState(1)
    // const [totalPages, setTotalPages] = useState()
    const apiKey = import.meta.env.VITE_API_KEY;
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

    const searchMovie = async (type=changeResource[0].name) => {
      axios
        .get(`https://api.themoviedb.org/3/${type}?${apiKey}`)
        .then((response) => {

          //Corrigir o problema da paginação: Ao clicar em outra catgoria e a pagina for diferente de 1 ele pega o resultado e soma co array corrente.
          // if (page === 1) {
            setResult(response.data.results)
          // } else {
          //   setResult(prevResults => [...prevResults, ...response.data.results]);
          // } 
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
      searchMovie(changeResource[0].name)
      setType(changeResource[0].name)
    }, []); 

    useEffect(() => {
      searchMovie()
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

        {/* <div className="show-more">
            <button onClick={() => (setPage(page+1))}>Mostrar mais</button>
        </div> */}
      </section>
    );
  };
  

export default SectionMovie