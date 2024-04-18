import './InputMovie.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

//A prop pageSate verifica qual a pagina na qual o input está sendo renderizado.
// eslint-disable-next-line react/prop-types
const InputMovie = ({pageState}) => {
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  //Correção a fezer -> não deixar o input passar vazio: O valor do input vazio joga no title null, obtendo resultado na API.

  const handleClickSearch = () => {
    if(pageState === 'Home'){
      navigate('/movie-search', {state: title})
    } else if (pageState === 'movie-search') {
      navigate('', { state: title })
    }
  }
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleEnterDown = (event) => {
    if (event.key === "Enter") {
      handleClickSearch()
    }
  }

  return (
    <>
      <div className='container-div'>
        <div className='container-input'>
            <input type="text" value={title} onChange={handleTitleChange} placeholder='Pesquisar' onKeyDown={handleEnterDown}/>
            <button onClick={handleClickSearch}><FaSearch /></button>
        </div>
      </div>
    </>
  )
}

export default InputMovie
