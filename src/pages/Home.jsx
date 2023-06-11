import Navbar from "../components/Navbar";
import BestMovies from "../components/BestMovies";

import './Home.css'

const Home = () => {
    return (
        <>
            <Navbar />
            <BestMovies />

            <footer>
                <h4>Lucas Kaique &copy; 2023</h4>
            </footer>
        </>
    )
}

export default Home