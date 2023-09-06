import TemplateMovie from "../components/TemplateMovie"
import Navbar from "../components/Navbar"

import axios from "axios"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import './SearchTemplate.css'

const SearchTemplate = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const searchUrl = import.meta.env.VITE_API

  const location = useLocation()
  const state = location.state
  console.log(state)

  const [result, setResult]  = useState('')
    
  const getMovie = (url) => {
    axios 
      .get(url)
      .then((response) => { 
        setResult(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });


  };

  useEffect(() => {
    const searchWithQueryURL = `${searchUrl}${state}?${apiKey}`;
    getMovie(searchWithQueryURL);
  }, [state]);
    return (

        <div className="template">
            <Navbar test={1}/>
            <TemplateMovie 
               movieTitle={result.title} 
              // movieImg={imgT} 
              // movieDescription={description} 
              // movieGenre={genre} 
              // movieYear={year} 
              // movieActors={actors} 
              // // movieDirector={director} 
              // movieReating={imdb}
              // // movieAward={award}
            />

            <footer>
                <h4>Lucas Kaique &copy; 2023</h4>
            </footer>
        </div>

    )
}

export default SearchTemplate