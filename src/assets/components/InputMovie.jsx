import './InputMovie.css'

const InputMovie = () => {
    const apiKey = 'a4afc84b'
    const title = document.getElementById('title')

    const getMovie = () =>{
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title.value}`)
    .then(response => response.json())
    .then(data => console.log(data));
    }

    //const movieName = title.value

    return (
        <>  
            <div>
                <input type="text" id="title"/>
                <button onClick={getMovie}>Buscar</button>
            </div>
        </>
    )
}

export default InputMovie