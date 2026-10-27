import { useState } from 'react'
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Menu from './componentes/main'
import './assets/styles/style.css'


function App() {

  return (
    <>
    <Navbar/>
    <Header/>
    <Menu/>
    <Footer/>
    </>
  )
}

export default App
