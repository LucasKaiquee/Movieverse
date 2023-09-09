import { useNavigate } from "react-router-dom"

import "./TemplateButton.css"

// eslint-disable-next-line react/prop-types
const TemplateButton = ({id}) => {
    const naviagte = useNavigate('')

    const handleMoviePage = () => {
        naviagte('Search', {state: id})
    }

    return(
        <>
            <button className="template-button" onClick={handleMoviePage}>Detalhes</button>
        </>
    )
}

export default TemplateButton