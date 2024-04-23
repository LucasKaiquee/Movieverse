import axiosApi from "../config/axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import TemplateMovie from "../components/TemplateMovie/TemplateMovie";
import Navbar from "../components/NavBar/Navbar";
import Loading from "../components/Loading/Loading";
import SliderGalery from "../components/SliderGalery/SliderGalery";

import logo1 from "../assets/imgs/VectorLogo1.svg";

import '../styles/SearchTemplate.css';

const SearchTemplate = () => {
  const location = useLocation()
  const state = location.state
  const [trailer, setTrailer] = useState('');
  const [images, setImages] = useState([]);

  const [result, setResult]  = useState('')
    
  const getMovie = async (endpoint) => {
    try {
      const response = await axiosApi.get(endpoint)
      setResult(response.data)

      const responseTrailer = await axiosApi.get(`/movie/${state}/videos`)
      responseTrailer.data.results.forEach((e) => {
        if(e.type === "Trailer") {
          setTrailer(e.key)
        }
      })

      const responseImages = await axiosApi.get(`/movie/${state}/images`)
      setImages(responseImages.data.backdrops)
      console.log(responseImages)

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
            {result ? <TemplateMovie 
              movieTitle={result.title} 
              movieImg={result.poster_path} 
              movieDescription={result.overview} 
              movieTime={result.runtime} 
              movieYear={result.release_date} 
              movieBudget={result.budget} 
              movieRevenue={result.revenue} 
              movieReating={result.vote_average}
              // // movieAward={award}
            /> : <div className="loading"><Loading /></div>}


            <div className="trailer-container">
              <p className="trailer-title">Trailer</p>
              <iframe width="660" height="415" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player"></iframe>
            </div>

            <div className="galery-container">
              <p className="galery-title">Galeria</p>
              <SliderGalery images={images}/>
            </div>  

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