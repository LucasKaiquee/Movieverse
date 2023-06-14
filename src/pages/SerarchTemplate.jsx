import TemplateMovie from "../components/TemplateMovie"
import Navbar from "../components/Navbar"

import axios from "axios"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import './SearchTemplate.css'

const SearchTemplate = () => {
    const apiKey = 'a4afc84b';
    
    const [result, setResult]  = useState('');
    const [imgT, setImgT] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [actors, setActor]= useState('');
    const [imdb, setImdb] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState('');
    const location = useLocation()
    const state = location.state

  const getMovie = () => {
    console.log(state)
    
    axios
      .get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${state}`)
      .then((response) => {
        console.log(response.data)

        if(response.data.Response === "False" || response.data.Title === "Null") {
            setResult("Não encontrei nada")
            setDescription("Verifique se o nome que digitou está correto ...")
        }
        else {
            setResult(response.data.Title)
            setImgT(response.data.Poster)
            setDescription(response.data.Plot)
            setGenre("Gênero: " + response.data.Genre)
            setActor("Elenco: " + response.data.Actors)
            setImdb("IMDB: " + response.data.imdbRating)
            setYear("Ano: " + response.data.Year)
            setDirector("Diretor: " + response.data.Director)
        }
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
  };

  useEffect(() => {
    getMovie();
  }, [state]);

    return (

        <>
            <Navbar test={1}/>
            <TemplateMovie 
            movieTitle={result} 
            movieImg={imgT} 
            movieDescription={description} 
            movieGenre={genre} 
            movieYear={year} 
            movieActors={actors} 
            movieDirector={director} 
            movieReating={imdb}
            />
        </>

    )
}

export default SearchTemplate