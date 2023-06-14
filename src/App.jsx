import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchTemplate from './pages/SerarchTemplate'
import BestPageMovie from './pages/BestPageMovie'

function App(){

  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Search" element={<SearchTemplate/>}/>
        <Route path='BestTemplate'element={<BestPageMovie/>}/>
    </Routes>
  )
}

export default App
