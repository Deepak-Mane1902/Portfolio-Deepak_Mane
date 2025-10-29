import React, { useEffect, useState } from 'react'
import { FiMenu,FiX } from 'react-icons/fi'
import { FaGithub,FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { BsPlusCircleDotted } from "react-icons/bs";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const [isActiveSection, setIsActiveSection] = useState("");  
  const [isScrolled, setIsScrolled] = useState(false);  

  //check scroll and change navbar background 
  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    // highlight active section while scrolling
    const sections = menuItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setIsActiveSection(menuItems[index].id);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
},);

  // useEffect(() => {
  //   const handleScroll=() => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll",handleScroll);
  //   return ()=> window.removeEventListener('scroll', handleScroll);
  // })
   


  // Scroll Function 
const handleMenuItemClick = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  setIsActiveSection(sectionId);
  setIsOpen(false);
};


  
  const menuItems = [
    {id:'about',label:'Home  '},
    {id:'skills',label:'Skills'},
    {id:'myself',label:'About'},
    {id:'work',label:'Project'},
    {id:'education',label:'Education'},
  ]

  return (
    <nav  className={`fixed t-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[7vw] ${
    isScrolled ? "bg-[#050414] bg-opacity-50 backdroup-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="text-white py-5 flex justify-between items-center">

        {/* Logo */}
      
        <div className="text-xl font-semibold cursor-pointer">
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Deepak</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Mane</span>
          <span className='text-[#8245ec]'>&gt;</span>
          <span></span>
        </div>

      {/* Desktop Menu */}
      <ul className='hidden lg:flex space-x-8 text-gray-300'>
        {menuItems.map((item)=>(
          <li key={item.id} className={` cursor-pointer text-white/80 
             hover:text-[#8245ec] ${
          isActiveSection === item.id ? "text-[#8245ec]" : ""}`}>
            <button onClick={()=> handleMenuItemClick(item.id)} className="cursor-pointer">{item.label}</button>
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}

      <div className="hidden lg:flex items-center ml-[-4vw] space-x-4">
        <a href="https://github.com/Deepak-Mane1902" target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-white'>
        <FaGithub size={24}/>
        </a>
        <a href="https://www.linkedin.com/in/mane-deepak" target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-blue-500'>
        <FaLinkedin size={24}/>
        </a>
          <a href="https://api.whatsapp.com/send/?phone=9960633200&text&type=phone_number&app_absent=0" target='_blank' rel='noopener noreferrer' className='text-gray-400 flex gap-2 p-2 bg-green-900 hover:bg-green-500 hover:text-white  rounded-xl'>Connect
        <FaWhatsapp size={24}/>
        </a>
      </div>

      {/* Mobile Menu Icons */}
        <div className="lg:hidden">
        {
          isOpen ? (<FiX className="text-3xl text-[#8245ec] cursor-pointer! "
            onClick={()=>setIsOpen(false)}/>
          )
          : (
            <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={()=>setIsOpen(true)}/>
          )
        }
        </div>
      </div>

      {/* Mobile Menu Items */}
  {isOpen && (
        <div className="absolute top-16 right-1 transform-x-1/2 w-full bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
      <ul className='flex flex-col items-start space-y-4 p-18 '>
      {menuItems.map((item)=>(
          <li key={item.id} className={`menu-items-mobRes text-white/80  hover:text-[#8245ec]  flex justify-between items-center gap-50 cursor-pointer! ${
          isActiveSection === item.id ? "text-[#8245ec]" : ""}`}>
            <button onClick={()=> handleMenuItemClick(item.id)} className='flex'>{item.label}
            <BsPlusCircleDotted  className='cursor-pointer! absolute right-10'/>
            </button>

          </li>
      ))}
      </ul>
        <div className="absolute bottom-5 left-18 flex space-x-4 items-center">
        <a href="https://github.com/Deepak-Mane1902" target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-white hover:scale-120 transition-all duration-75 ease-in-out'>
        <FaGithub size={24}/>
        </a>
        <a href="https://www.linkedin.com/in/mane-deepak" target='_blank' rel='noopener noreferrer' className='  hover:text-blue-700
        text-gray-700  hover:scale-120 transition-all duration-75 ease-in-out'>
        <FaLinkedin size={24}/>
        </a>
        <a href="https://www.linkedin.com/in/mane-deepak" target='_blank' rel='noopener noreferrer' className='text-gray-300 flex gap-2 p-2 bg-green-900 hover:bg-green-500 hover:text-white  absolute md:right-[-74vw] lg:right-[-86vw] right-[-60vw] rounded-xl'>Whatsapp
        <FaWhatsapp size={24}/>
        </a>
        
      </div>
      </div>
  )}
    </nav>
  )
}

export default Nav