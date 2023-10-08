import './InputMovie.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Search from './Search';


//A prop pageSate verifica qual a pagina na qual o input está sendo renderizado.
// eslint-disable-next-line react/prop-types
const InputMovie = ({pageState}) => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleClickSearch = () => {
    if(pageState === 'Home'){
      navigate('/SearchArea', {state: title})
    } else if (pageState === 'Search') {
      navigate('', { state: title });
    }
  };
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

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
            <Search getPage={handleClickSearch}/>
        </div>
      </div>
    </>
  );
};

export default InputMovie;
