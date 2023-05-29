import './TemplateMovie.css'

const TemplateMovie = (props) =>{
    
    return (
        <> 
            <div className='container'>
                <h2>{props.movieTitle}</h2>
                <p>{props.movieDescription}</p>
                <div className='content'>
                    <img src={props.movieImg}/>
                    <ul>
                        <li className="item">{props.movieGenre}</li>
                        <li className="item">{props.movieYear}</li>
                        <li className="item">{props.movieActors}</li>
                        <li className="item">{props.movieDirector}</li>
                        <li className="item">{props.movieReating}</li>
                    </ul>
                </div>
            </div>
        </>
    );
}


export default TemplateMovie