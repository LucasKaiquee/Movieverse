import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchTemplate from './pages/SerarchTemplate'
import SearchMovie from './pages/SearchMovie'


function App(){

  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Search" element={<SearchTemplate/>}/>
        <Route path='SearchArea' element={<SearchMovie/>}/>
    </Routes>
  )
}

export default App
