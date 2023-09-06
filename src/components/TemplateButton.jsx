import { useNavigate } from "react-router-dom"

import "./TemplateButton.css"

// eslint-disable-next-line react/prop-types
const TemplateButton = ({id}) => {
    const naviagte = useNavigate('')

    const handleBestPage = () => {
        naviagte('Search', {state: id})
    }

    return(
        <>
            <button className="template-button" onClick={handleBestPage}>Detalhes</button>
        </>
    )
}

export default TemplateButton