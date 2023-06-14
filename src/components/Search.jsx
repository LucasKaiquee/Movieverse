import { FaSearch } from "react-icons/fa"

import './Search.css'

// eslint-disable-next-line react/prop-types
const Search = ({getPage}) => {

    return (
        <button onClick={getPage}>Buscar <FaSearch/></button>
    )
}

export default Search