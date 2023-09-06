/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import TemplateButton from "./TemplateButton";

import "./Card.css"

const Card = (props) => {
    const imgPath = "https://image.tmdb.org/t/p/w500/"
    
    return (
        <>
            <div className="container-card">

                <img className="img-card" src={imgPath + props.path} />
                <div className="content-card">
                  <p><FaStar color="#FFFF00" /> {props.voteAverage}</p>
                  <TemplateButton id={props.id}/>
                </div>
            </div>
        </>
    )
}

export default Card