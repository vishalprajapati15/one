import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import WebDevelopment from './pages/WebDevelopment'
import ItSolution from './pages/ItSolution'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/web-development' element={<WebDevelopment />} />
        <Route path='/it-solution' element={<ItSolution />} />
      </Routes>
    </div>
  )
}

export default App