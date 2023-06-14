import InputMovie from "./InputMovie"
import {FaFilm } from "react-icons/fa" 

import { useNavigate } from "react-router-dom"

import "./Navbar.css"

// eslint-disable-next-line react/prop-types
const Navbar = ({test}) => {
    const navigate = useNavigate()

    const hadleLogoClick = () => {
        navigate('/')
    }

    return (
        <>
            <nav>
                <div className="container-logo" onClick={hadleLogoClick}>
                    <FaFilm color="#e803f8" size={35} className="fa"/>
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