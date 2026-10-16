import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Main from './componentes/main'
import './assets/styles/style.css'

function App() {

  return (
    <>
    <Navbar/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
