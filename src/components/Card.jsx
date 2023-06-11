/* eslint-disable react/prop-types */
import axios from "axios"
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import TemplateButton from "./TemplateButton";

import "./Card.css"

const Card = (props) => {
    const apiKey = 'a4afc84b';
    const [title, setTitle] = useState('')
    const [titleRating, setTitleRating] = useState('')

    const Movie = () => {
        axios
          .get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${props.bestTitleMovie}`)
          .then((response) => {
            console.log(response.data);
            setTitle(response.data.Poster)
            setTitleRating(response.data.imdbRating)
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
                <div className="content-card">
                  <p><FaStar color="#FFFF00" /> {titleRating}</p>
                  <TemplateButton />
                </div>
            </div>
        </>
    )
}

export default Card