import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Card from '../components/Card/Card';
import InputMovie from '../components/InputMovie/InputMovie';
import Navbar from '../components/NavBar/Navbar';

import axios from 'axios';

import './SearchMovie.css'
import logo1 from "../assets/imgs/VectorLogo1.svg"

const SearchMovie = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const searchUrl = import.meta.env.VITE_SEARCH;

  const location = useLocation();
  const state = location.state;

  const [result, setResult] = useState([]);

  const getMovie = (url) => {
    axios
      .get(url)
      .then((response) => {
        setResult(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(result)

  useEffect(() => {
    const searchWithQueryURL = `${searchUrl}?${apiKey}&query=${state}`;
    getMovie(searchWithQueryURL);
  }, [state]);

  return (
    <section >
      <Navbar />
      <div className='search-movie-container'>
        <h3>Resultados para:</h3>
        <p className='title-state'>{state}</p>
        <InputMovie pageState={'Search'}/>
        <div className='container-movies'>
          {result.map((result, index) =>(
            <Card  
              key={index} 
              path={result.poster_path} 
              title={result.title}
              voteAverage={result.vote_average}
              id={result.id}
            />
          ))}
        </div>
      </div>

      <footer>
        <div className="container-footer">
          <img src={logo1} alt="Logotipo" />
            <span>Movie Verse</span>
        </div>
        <h4>Copyright © 2023 MovieVerse. Todos os direitos reservados.</h4>
        </footer>
    </section>
  );
};

export default SearchMovie;
