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
        }
      })
      .catch((error) => {
        console.error(error);
      });
        setImgT()
        setDescription()

  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <div>
        <input type="text" value={title} onChange={handleTitleChange}/>
        <button onClick={getMovie}>Buscar</button>
        <TemplateMovie movieTitle={result} movieImg={imgT} movieDescription={description} />
      </div>
    </>
  );
};

export default InputMovie