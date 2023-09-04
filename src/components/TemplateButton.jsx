import { useNavigate } from "react-router-dom"

import "./TemplateButton.css"

// eslint-disable-next-line react/prop-types
const TemplateButton = ({title}) => {
    const naviagte = useNavigate('')

    const handleBestPage = () => {
        naviagte('Search', {state: title})
    }

    return(
        <>
            <button className="template-button" onClick={handleBestPage}>Detalhes</button>
        </>
    )
}

export default TemplateButton