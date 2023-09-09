import Navbar from "../components/Navbar";
import BestMovies from "../components/SectionMovie";
import InputMovie from "../components/InputMovie";

import logo from "../assets/imgs/VectorLogo2.svg"
import logo1 from "../assets/imgs/VectorLogo1.svg"

import './Home.css'

const Home = () => {
   
    return (
        <>
            <Navbar/>
            <header className="header">
                <div className="container-header">  
                    <h1>Bem-vindo ao MovieVerse</h1>
                    <h2>Descubra Seu Filme Perfeito</h2>
                    <p>No Movie Verse, sua jornada cinematográfica começa aqui! Nosso buscador de filmes é sua ferramenta confiável para descobrir o filme perfeito para cada ocasião. Com uma vasta coleção de títulos e informações detalhadas, estamos aqui para ajudá-lo a encontrar a próxima história que vai cativar sua imaginação.</p>

                    <InputMovie />
                </div>

                <img src={logo} alt="" />
            </header>

            <BestMovies />
            
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