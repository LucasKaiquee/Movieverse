import { FaSearch } from "react-icons/fa"

// eslint-disable-next-line react/prop-types
const Search = ({getPage}) => {

    return (
        <button onClick={getPage}><FaSearch/></button>
    )
}

export default Search