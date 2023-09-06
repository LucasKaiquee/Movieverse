/* eslint-disable react/prop-types */
import './TemplateMovie.css'

const TemplateMovie = (props) =>{
    const imgPath = "https://image.tmdb.org/t/p/w500/"

    return (
        <> 
            <div className='container'>
                <img className='poster' src={imgPath + props.movieImg}/>
                <div className='content'>
                    <h2>{props.movieTitle}</h2>
                    <ul>
                        <li className="item">Duração: {props.movieTime}</li>
                        <li className="item">Data de Lançamento: {props.movieYear}</li>
                        <li className="item">Orçamento: ${props.movieBudget}</li>
                        <li className="item">Receita: ${props.movieRevenue}</li>
                        <li className="item">Nota: {props.movieReating}</li>
                    </ul>
                    <p>{props.movieDescription}</p>
                </div>
            </div>
        </>
    );
}


export default TemplateMovie