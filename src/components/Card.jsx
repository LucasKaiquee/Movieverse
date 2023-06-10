import axios from "axios"
import { useState } from "react";

import "./Card.css"

const Card = (props) => {
    const apiKey = 'a4afc84b';
    const [title, setTitle] = useState('')

    const Movie = () => {
        axios
          .get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${props.bestTitleMovie}`)
          .then((response) => {
            console.log(response.data);
            setTitle(response.data.Poster)
          })
          .catch((error) => {
            console.error(error);
          });
    }

    Movie()
    
    return (
        <>
            <div className="container-card">
                <img src={title} />
                
            </div>
        </>
    )
}

export default Card