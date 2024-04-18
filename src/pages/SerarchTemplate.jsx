import TemplateMovie from "../components/TemplateMovie/TemplateMovie"
import Navbar from "../components/NavBar/Navbar"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import logo1 from "../assets/imgs/VectorLogo1.svg"
import axiosApi from "../config/axios"

import './SearchTemplate.css'

const SearchTemplate = () => {
  const location = useLocation()
  const state = location.state

  const [result, setResult]  = useState('')
    
  const getMovie = async (endpoint) => {
    try {
      const response = await axiosApi.get(endpoint)
      setResult(response.data)
    } catch(error){
        console.error(error)
    }
  }

  useEffect(() => {
    const searchWithQueryURL = `/movie/${state}`
    getMovie(searchWithQueryURL)
  }, [state])
    return (

        <div className="template">
            <Navbar test={1}/>
            <TemplateMovie 
              movieTitle={result.title} 
              movieImg={result.poster_path} 
              movieDescription={result.overview} 
              movieTime={result.runtime} 
              movieYear={result.release_date} 
              movieBudget={result.budget} 
              movieRevenue={result.revenue} 
              movieReating={result.vote_average}
              // // movieAward={award}
            />

            <footer>
                <div className="container-footer">
                    <img src={logo1} alt="Logotipo" />
                    <span>Movie Verse</span>
                </div>
        
                <h4>Copyright © 2023 MovieVerse. Todos os direitos reservados.</h4>
            </footer>
        </div>
    )
}

export default SearchTemplate