import TemplateMovie from "../components/TemplateMovie"
import Navbar from "../components/Navbar"

import axios from "axios"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import './SearchTemplate.css'

const SearchTemplate = () => {
  const apiKey = '4d58cfce7093e670754f1a8a8ceac28f';

  const location = useLocation()
  const state = location.state

  const [result, setResult]  = useState('')
  const [imgT, setImgT] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState('')
  const [actors, setActor]= useState('')
  const [imdb, setImdb] = useState('')
  const [director, setDirector] = useState('')
  const [year, setYear] = useState('')
  const [award, setAward] = useState('')
    

  const getMovie = () => {
    axios
      .get(`https://api.themoviedb.org/3/search/batmam/?api_key=${apiKey}`)
      .then((response) => {

        if(response.data.Response === "False" || response.data.Title === "Null") {
            setResult("Não encontrei nada")
            setDescription("Verifique se o que digitou está correto ...")
        }
        else {
            setResult(response.data.title)
            setImgT(response.data.poster_path)
            setDescription(response.data.overview)
            setGenre("Gênero: " + response.data.original_language)
            setActor("Elenco: " + response.data.release_date)
            setImdb("IMDB: " + response.data.vote_average)
            setYear("Ano: " + response.data.release_date)
            // setDirector("Diretor: " + response.data.Director)
            // setAward("Premiação: " + response.data.Awards)
            console.log(response.data)
        }

        console.log("hdcgb")
      })
      .catch((error) => {
        console.error(error);
      });

        setResult()
        setImgT()
        setDescription()
        setGenre()
        setDirector()
        setImdb()
        setYear()
        setActor()
        setAward()
  };

  useEffect(() => {
    getMovie();
  }, [state]);

    return (

        <div className="template">
            <Navbar test={1}/>
            <TemplateMovie 
              movieTitle={result} 
              movieImg={imgT} 
              movieDescription={description} 
              movieGenre={genre} 
              movieYear={year} 
              movieActors={actors} 
              // movieDirector={director} 
              movieReating={imdb}
              // movieAward={award}
            />

            <footer>
                <h4>Lucas Kaique &copy; 2023</h4>
            </footer>
        </div>

    )
}

export default SearchTemplate