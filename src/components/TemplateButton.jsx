import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const TemplateButton = ({title}) => {
    const naviagte = useNavigate('')

    const handleBestPage = () => {
        naviagte('Search', {state: title})
    }

    return(
        <>
            <button onClick={handleBestPage}>Detalhes</button>
        </>
    )
}

export default TemplateButton