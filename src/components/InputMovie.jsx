import './InputMovie.css'
import axios from 'axios'
import { useState } from 'react';
import TemplateMovie from './TemplateMovie';


const InputMovie = () => {
  const apiKey = 'a4afc84b';
  const [title, setTitle] = useState('');
  const [result, setResult]  = useState('');
  const [imgT, setImgT] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [actors, setActor]= useState('');
  const [imdb, setImdb] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  
  const getMovie = () => {

    axios
      .get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
      .then((response) => {
        console.log(response.data);

        if(response.data.Response === "False") {
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

  const handleEnterDown = (event) => {
    if(event.key === 'Enter'){
        getMovie()
    }
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <div>
        <input type="text" value={title} onChange={handleTitleChange} onKeyDown={handleEnterDown}/>
        <button onClick={getMovie}>Buscar</button>
        <TemplateMovie movieTitle={result} movieImg={imgT} movieDescription={description} movieGenre={genre} movieYear={year} movieActors={actors} movieDirector={director} movieReating={imdb}/>
      </div>
    </>
  );
};

export default InputMovie