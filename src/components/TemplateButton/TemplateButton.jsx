import { useLocation, useNavigate } from "react-router-dom"

import "./TemplateButton.css"

// eslint-disable-next-line react/prop-types
const TemplateButton = ({id}) => {
    const navigate = useNavigate('')
    const location = useLocation('')
    const currentUrl = location.pathname

    const handleMoviePage = () => {
        if(currentUrl === '/movie-search'){
            navigate('../movie-details', {state: id})
        } else navigate('/movie-details', {state: id})
    }

    return(
        <>
            <button className="template-button" onClick={handleMoviePage}>Detalhes</button>
        </>
    )
}

export default TemplateButton