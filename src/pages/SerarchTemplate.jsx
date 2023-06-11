import InputMovie from "../components/InputMovie"
import { FaFilm } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

import './SearchTemplate.css'

const SearchTemplate = () => {
    const navigate = useNavigate('')

    const handleClickBack = () => {
        navigate('/')
    }

    return (
        <div className="container-template">  
        
            <div className="container-search">
                <div className="container-logo">
                    <FaFilm color="#e803f8" size={45}/>
                    <h1>Movie Verse</h1>
                </div>
                <button onClick={handleClickBack}><FaArrowLeft /> Voltar</button>
            </div>

            <InputMovie />

            <footer>
                <h4>Lucas Kaique &copy; 2023</h4>
            </footer>
        </div>
        
    )
}

export default SearchTemplate