import InputMovie from "./InputMovie"
import {FaFilm } from "react-icons/fa" 

import "./Navbar.css"

// eslint-disable-next-line react/prop-types
const Navbar = ({test}) => {

    return (
        <>
            <nav>
                <div className="container-logo">
                    <FaFilm color="#e803f8" size={45}/>
                    <h1>Movie Verse</h1>
                </div>
                <div className="input">
                    <InputMovie test={test}/>
                </div>
            </nav>
        </>
    )
}

export default Navbar