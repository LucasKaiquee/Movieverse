import { useNavigate } from "react-router-dom"
import logo from "../../assets/imgs/VectorLogo1.svg"

import "./Navbar.css"

// eslint-disable-next-line react/prop-types
const Navbar = () => {
    const navigate = useNavigate()

    const hadleLogoClick = () => {
        navigate('/')
    }

    return (
        <>
            <nav>
                <div className="nav-content">
                    <div className="container-logo" onClick={hadleLogoClick}>
                        <img src={logo} alt="Logotipo" />
                        <span>Movie Verse</span>
                    </div>
                    {/* <div className="container-navigation">
                        <a href="" className="navigation">Criar conta</a>
                        <a href="#teste" className="navigation">Entrar</a>
                        <a href="" className="navigation">Buscar</a>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar