import { FaSearch } from "react-icons/fa"

import './Search.css'

const Search = ({getPage}) => {

    return (
        <button onClick={getPage}>Pesquisar <FaSearch/></button>
    )
}

export default Search