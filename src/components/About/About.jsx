import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}

        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[elgoc]  text-white mb-2 leading-tight space-x-1">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-[elgoc] mb-1 md:mb-4 leading-8">
            Deepak Mane
          </h2>
          <p className="text-lg font-[elgoc]  sm:text-2xl md:text-lg font-semibold mt-4 md:mt-6 leading-6 text-white/70">
           I’m a passionate to become a Software Developer  a strong focus on building modern, user-friendly, and efficient web applications.  I enjoy transforming ideas into scalable digital solutions using the MERN stack and exploring new technologies to stay ahead in this fast-moving tech world.
                      <TypeAnimation
              sequence={[
                "Fullstack Development",
                2000,
                "Frontend Development",
                2000,
                "Backend Development",
                2000,
                "Fullstack Java Development",
                2000,
                "UI/UX Development",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-[#8245ec] text-4xl pl-2"
              repeat={Infinity}
            />
          </p>


          <button className="btn-dwn-cv mt-1 py-4 px-[2vw] rounded-2xl bg-[#2b0a66] border-none 
          hover:bg-[#8245ec]  cursor-pointer flex gap-2 items-center transition-all ease-in-out duration-150 ">
          <a href="#"
          target='_blank'
          className="flex justify-center md:justify-start gap-2 items-center text-white/70 hover:text-white ">
          Download CV
          <FiArrowRight className="text-2xl hover:pl-1"/>
          </a>
          </button>
          
        </div>
{/* Right Side */}

      </div>
    </section>
  );
};

export default About;
