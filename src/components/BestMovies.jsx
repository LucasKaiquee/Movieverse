import Card from "./Card"
import { useState, useEffect} from "react"
import { FaStar } from "react-icons/fa";

import "./BestMovies.css"

const BestMovies = () => {
    const [changeResource, setChangeResource] = useState([]);
    const [type, setType] = useState('')

    const typeFilm = 'Filmes'
    const typeSerie = 'Séries'

    const bestTitles = [
      'The Shawshank Redemption',
      'The Godfather',
      'The Godfather: Part II',
      '12 Angry Men',
      "Schindler's List",
      'The Lord of the Rings: The Return of the King',
      'Pulp Fiction',
      'The Good, the Bad and the Ugly',
      'The Lord of the Rings: The Fellowship of the Ring'
    ];
  
    const bestSeries = [
      'Breaking Bad',
      'Planet Earth II',
      'Band of Brothers',
      'Game of Thrones',
      'Chernobyl',
      'The Wire',
      'Our Planet',
      'The Sopranos',
      'Rick and Morty'
    ];
  
    const handleChangeResource = (titles, type) => {
      setChangeResource(titles);
      setType(type)
    };
  
    useEffect(() => {
      handleChangeResource(bestTitles, typeFilm);
    }, []); 
  
    return (
      <>
        <h1 className="best-h">Melhores {type}</h1>
        <p className="best-p"><FaStar color="#FFFF00" size={20}/> Esses são os Títulos melhores avaliados no IMDB para {type}</p>
        <div className="select-best">
          <button onClick={() => handleChangeResource(bestTitles, typeFilm)}>Filmes</button>
          <button onClick={() => handleChangeResource(bestSeries, typeSerie)}>Séries</button>
        </div>
        <div className="container-movies">
          {changeResource.map((title, index) => (
            <Card key={index} bestTitleMovie={title} />
          ))}
        </div>
      </>
    );
  };
  

export default BestMovies