import './InputMovie.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Search from './Search';

// eslint-disable-next-line react/prop-types
const InputMovie = ({test}) => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleClickSearch = () => {
    if(test === 1){
      navigate('/Search', {state: title})
    } else {
      navigate('Search', { state: title });
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
