import React   from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Goals from './components/Goals'
import History from './components/History'
import "./components/style.css"
import AdminForm from './components/AdminForm'
import Members from './components/Members'
import Err from './components/Err'



function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/adminform'  element={<AdminForm title="Admin Form"/>}></Route>
    <Route path='/about' element={<About title="About Us"/>}></Route>
    <Route path='/contact' element={<Contact title="Contact Us"/>}></Route>
    <Route path='/gallery' element={<Gallery title="Our Gallery"/>}></Route>
    <Route path='/members' element={<Members title="Our Members"/>}></Route>
    <Route path='/goals' element={<Goals title="Our Goals"/>}></Route>
    <Route path='/history' element={<History title="Our History"/>}></Route>
    <Route path='*' element={<Err/>}></Route>
    

    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App