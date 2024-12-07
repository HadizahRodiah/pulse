import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as ICONS from 'react-bootstrap-icons'
import Home from './Home'
import Faq from './Faq'
import Footer from './Footer'
import Nav from './Nav'

function App() {
  

  return (
    <>
    <Nav/>
    <Home/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default App
