import Navbar from "../components/Navbar";
import BestMovies from "../components/BestMovies";
import InputMovie from "../components/InputMovie";

import './Home.css'

const Home = () => {
   
    return (
        <>
            <Navbar/>
            <header className="header">
                <div className="container-header">  
                    <h1>Bem-vindo ao MovieVerse</h1>
                    <h3>Descubra Seu Filme Perfeito</h3>
                    <p>No Movie Verse, sua jornada cinematográfica começa aqui! Nosso buscador de filmes é sua ferramenta confiável para descobrir o filme perfeito para cada ocasião. Com uma vasta coleção de títulos e informações detalhadas, estamos aqui para ajudá-lo a encontrar a próxima história que vai cativar sua imaginação.</p>

                    <InputMovie />
                </div>

            </header>

            <BestMovies />
            
            <footer>
                <h4>Lucas Kaique &copy; 2023</h4>
            </footer>
        </>
    )
}

export default Home