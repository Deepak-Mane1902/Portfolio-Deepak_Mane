import React from 'react'

import Nav from './components/Navbar/Nav'
import Skills from './components/Skills/Skills'
import Exp from './components/Experience/Exp'
import Work from './components/Work/Work'
import Edu from './components/Education/Edu'
import Contact from './components/Contact/Contact'
import Foot from './components/Footer/Foot'
import BlurBulb from './BlurBulb'
import ScrollText from './components/TextAnime'
import Myself from './components/Myself/Myself'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
  <div className="page  ">
<BlurBulb position={{top:'4%', left:'20%'}} size={{width:'30%',height:'5%'}}></BlurBulb>
    <div className="grid-overlay fade-top" aria-hidden="true"></div>
    <div className='pt-0 flex flex-col relative'>
      <Nav/>
       <Hero />
        <Skills/>
        <Myself />
         {/* <Exp/> */}
       <Work/>
      <Edu/>
      <ScrollText />
      <Contact/>
      <Foot/> 
    </div>
  </div>
  )
}

export default App