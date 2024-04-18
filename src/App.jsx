import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchTemplate from './pages/SerarchTemplate'
import SearchMovie from './pages/SearchMovie'

function App(){

  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie-details" element={<SearchTemplate/>}/>
        <Route path='movie-search' element={<SearchMovie/>}/>
    </Routes>
  )
}

export default App
