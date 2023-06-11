import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

import './Search.css'

const Search = () => {
    const navigate = useNavigate('')

    const handleClickBack = () => {
        navigate('Search')
    }

    return (
        <button onClick={handleClickBack}>Pesquisar <FaSearch/></button>
    )
}

export default Search