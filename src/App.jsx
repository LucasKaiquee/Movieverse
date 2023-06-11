import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchTemplate from './pages/SerarchTemplate'

function App(){

  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Search" element={<SearchTemplate/>}/>
    </Routes>
  )
}

export default App
