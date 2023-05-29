import './TemplateMovie.css'

const TemplateMovie = (props) =>{

    return (
        <> 
            <div className='container'>
                <h2>{props.movieTitle}</h2>
                <p>{props.movieDescription}</p>
                <img src={props.movieImg}/>
            </div>
            
        </>
    );
}


export default TemplateMovie