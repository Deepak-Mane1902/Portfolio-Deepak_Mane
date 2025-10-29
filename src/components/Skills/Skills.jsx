import React, { useEffect, useRef } from "react";
import { SkillsInfo } from "../../../constants/index";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const categoryRefs = useRef([]);

  useEffect(() => {
    // Animate each skill category card
    gsap.fromTo(
      categoryRefs.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3, // 👈 each category animates in sequence
        scrollTrigger: {
          trigger: "#skills",
          start: "top 85%",
          end: "bottom 70%",
          scrub: true, // 👈 scroll-synced
          toggleActions: "play none none reverse",
          // markers: true, // 👈 uncomment for debugging scroll positions
        },
      }
    );
  }, []);

  return (
    <section
      id="skills"
      className=" py-10 pb-24 px-[8vw] md:px-0 lg:px-[10vw] font-[elgoc] skills-gradient clipCustom"
    >
      {/* Section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-[elgoc] text-white uppercase">
          Skills
        </h2>

        {/* Underline */}
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects.
        </p>
      </div>

      {/* Skills Categories */}
      <div className="w-full flex flex-wrap gap-1 lg:gap-5 py-20 justify-between">
        {SkillsInfo.map((category, catIndex) => (
          <div
            key={`${category.title}-${catIndex}`}
            ref={(el) => (categoryRefs.current[catIndex] = el)} // 👈 track each card
            className="bg-gray-900 backdrop-blur-md px-10 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill items */}
            <Tilt scale={1} className="transition-all duration-150 ease-in-out">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mt-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={`${skill.name}-${skillIndex}`}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 md:px-10 lg:px-2 hover:border-[#8245ec] transition-all duration-200"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-6 sm:h-8 md:w-6 md:h-6 object-contain"
                    />
                    <span className="lg:text-lg md:text-xs sm:text-lg text-gray-300">
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
  );
};

export default Skills;
