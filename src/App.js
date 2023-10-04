import React from 'react'
import Work from './container/Work/Work'
import About from './container/About/About'
import Footer from './container/Footer/Footer'
import Header from './container/Header/Header'
import Skills from './container/Skills/Skills'

import { Navbar  } from './components'
import './App.scss'
const App = () => {
  return (
    <div className='app'>
  <Navbar/>
     <Header/>
     <About/>
     <Work/>
     <Skills/>
 
      <Footer />
      </div>
  )
}

export default App