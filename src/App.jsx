import React from 'react'

import Nav from './components/Navbar/Nav'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Exp from './components/Experience/Exp'
import Work from './components/Work/Work'
import Edu from './components/Education/Edu'
import Contact from './components/Contact/Contact'
import Foot from './components/Footer/Foot'
import BlurBulb from './BlurBulb'

const App = () => {
  return (
  <div className="page ">
<BlurBulb position={{top:'8%', left:'20%'}} size={{width:'30%',height:'10%'}}></BlurBulb>
    <div className="grid-overlay fade-top" aria-hidden="true"></div>
    <div className='pt-0 flex flex-col relative'>
      <Nav/>
       <About/>
   <Skills/>
        <Exp/>
      <Work/>
      <Edu/>
      <Contact/>
      <Foot/>
    </div>
  </div>
  )
}

export default App