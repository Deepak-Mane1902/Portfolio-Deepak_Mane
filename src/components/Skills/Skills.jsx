import React from 'react'
import {SkillsInfo} from '../../../constants/index'
import Tilt from 'react-parallax-tilt'

const Skills = () => {
  return (
    <section id='skills' className='py-10 pb-24 px-[8vw] md:px-0 lg:px-[10vw] font-[elgoc] skills-gradient clip-path-custom'>

      {/* Section title */}
    <div className="text-center mb-8">
      <div className="text-3xl sm:text-4xl font-[elgoc] text-white uppercase">Skills</div>
      {/* UnderLine */}
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div> 
    <p className="text-gray-400 mt-4 text-lg font-[semibold]">
      A collection of my technical skills and expertise honed through various projects.
    </p>
       </div>


       {/* Skills Categories */}

      <div className=" w-full flex flex-wrap gap-1 lg:gap-5 py-20 justify-between ">
    {SkillsInfo.map((category)=>(
      <div 
      key={category.title}
      className="bg-gray-900 backdrop-blur-md px-16 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white
      shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
        
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
          {category.title}
        </h3>

        {/* Skill items -3 per row on larger screen */}
        
      <Tilt scale={1} className='transition-all duration-150 ease-in-out'>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mt-6">

      {category.skills.map((skill)=>(
        <div key={skill} className="flex items-center justify-center space-x-2 bg-transparent border-2  border-gray-700 rounded-3xl py-2 px-2 md:px-10 lg:px-2 ">
        <img src={skill.logo} alt={`${skill.name} logo`} className='w-6 h-6 sm:w-6 sm:h-8 md:w-6 md:h-6'  />
        <span className='lg:text-lg md:text-xs  sm:text-lg text-gray-300 '>
          {skill.name}
        </span>
      </div>
      ))}
      </div>
      </Tilt>
      </div>
    ))}
      </div>

    </section>
  )
}

export default Skills