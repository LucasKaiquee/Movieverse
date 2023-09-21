import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchMovie = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const searchUrl = import.meta.env.VITE_SEARCH;

  const location = useLocation();
  const state = location.state;

  const [result, setResult] = useState('');

  const getMovie = (url) => {
    axios
      .get(url)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchUrl}?${apiKey}&query=${state}`;
    getMovie(searchWithQueryURL);
  }, [state]);

  return (
    <section>
      <div className="container-movies">//resolver o problema do result</div>
    </section>
  );
};

export default SearchMovie;
