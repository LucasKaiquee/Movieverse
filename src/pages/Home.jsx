import Navbar from "../components/NavBar/Navbar";
import SectionMovie from "../components/SectionMovie/SectionMovie";
import InputMovie from "../components/InputMovie/InputMovie";

import logo from "../assets/imgs/VectorLogo2.svg";
import logo1 from "../assets/imgs/VectorLogo1.svg";

import "../styles/Home.css";
import Header from "../components/Header/Header";

const Home = () => {
   
    return (
        <>
            <Navbar/>
            <Header />
            <SectionMovie />
            
            <footer>
                <div className="container-footer">
                    <img src={logo1} alt="Logotipo" />
                    <span>Movie Verse</span>
                </div>
        
                <h4>Copyright © 2023 MovieVerse. Todos os direitos reservados.</h4>
            </footer>
        </>
    )
}

export default Home