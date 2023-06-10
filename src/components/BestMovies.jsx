import axios from "axios"
import { useState } from "react"

import Card from "./Card"

import "./BestMovies.css"

const BestMovies = () => {

    const besttitle = [
        'The Shawshank Redemption', 
        'The Godfather', 
        'The Godfather: Part II', 
        '12 Angry Men', 
        "Schindler's List", 
        'The Lord of the Rings: The Return of the King',
        'Pulp Fiction',
        'The Good, the Bad and the Ugly',
        'The Lord of the Rings: The Fellowship of the Ring'
    ]

    return (
        <>
            <h1>Melhores Filmes</h1>
            <div className="container-movies">
                <Card bestTitleMovie={besttitle[0]} />
                <Card bestTitleMovie={besttitle[1]} />
                <Card bestTitleMovie={besttitle[2]} />
                <Card bestTitleMovie={besttitle[3]} />
                <Card bestTitleMovie={besttitle[4]} />
                <Card bestTitleMovie={besttitle[5]} />
                <Card bestTitleMovie={besttitle[6]} />
                <Card bestTitleMovie={besttitle[7]} />
                <Card bestTitleMovie={besttitle[8]} />
            </div>
        </>
    )
}

export default BestMovies