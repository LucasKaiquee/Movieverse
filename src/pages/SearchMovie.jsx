import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Card from "../components/Card/Card";
import InputMovie from "../components/InputMovie/InputMovie";
import Navbar from "../components/NavBar/Navbar";

import axiosApi from "../config/axios";

import "./SearchMovie.css";
import logo1 from "../assets/imgs/VectorLogo1.svg";
import Loading from "../components/Loading/Loading";

const SearchMovie = () => {
    const location = useLocation()
    const state = location.state

    const [result, setResult] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getMovie = async (endpoint) => {
        try {
            setIsLoading(true)
            const response = await axiosApi.get(endpoint)
              setResult(response.data.results)
              setIsLoading(false)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const searchWithQueryURL = `search/movie?query=${state}`
        getMovie(searchWithQueryURL)
    }, [state])

    return (
        <section>
            <Navbar />
            <div className="search-movie-container">
                <h3>Resultados para:</h3>
                <p className="title-state">{state}</p>
                <InputMovie pageState={"movie-search"} />
                <div className="container-movies">
                    {isLoading ? (
                        <div className="loading">
                            <Loading />
                        </div>
                    ) : (
                        result.length > 0 ? (
                            result.map((result, index) => (
                                <Card
                                    key={index}
                                    path={result.poster_path}
                                    title={result.title}
                                    voteAverage={result.vote_average}
                                    id={result.id}
                                />
                            ))
                        ) : (
                            <div className="alert">
                                <h3>Nenhum resultado encontrado!</h3>
                            </div>
                        )
                    )}
                </div>
            </div>

            <footer>
                <div className="container-footer">
                    <img src={logo1} alt="Logotipo" />
                    <span>Movie Verse</span>
                </div>
                <h4>Copyright © 2023 MovieVerse. Todos os direitos reservados.</h4>
            </footer>
        </section>
    )
}

export default SearchMovie
