import Search from "./Search"
import {FaFilm } from "react-icons/fa" 

import "./Navbar.css"

const Navbar = () => {

    return (
        <>
            <nav>
                <div className="container-logo">
                    <FaFilm color="#e803f8" size={45}/>
                    <h1>Movie Verse</h1>
                </div>
                
                <Search />
            </nav>
        </>
    )
}

export default Navbar