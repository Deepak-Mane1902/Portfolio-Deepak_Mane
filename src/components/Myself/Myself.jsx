import React, { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import BlurBulb from '../../BlurBulb';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Myself = () => {
  const sectionRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side (text) stagger animation
      gsap.from(leftSideRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 30%',
          scrub: 1,
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // Right side (image) slide-in
      gsap.from(rightSideRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 30%',
          scrub: 1,
        },
        opacity: 0,
        x: 120,
        ease: 'power2.out',
      });

      // Button subtle fade-up reveal
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      id="myself"
      ref={sectionRef}
      className="py-10 pb-24 px-[8vw] md:px-0 lg:px-[10vw] font-[elgoc] skills-gradient"
    >
      {/* Section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-[elgoc] text-white uppercase">
          About Me
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      </div>

      {/* About Me Section */}
      <div className="w-[90vw] ml-[-4vw] md:ml-[-6vw] h-full md:h-[90vh] flex flex-col-reverse md:flex-row">
        {/* Left Side Content */}
        <div
          ref={leftSideRef}
          className="left-side w-full md:pl-20 lg:px-18 pt-1 md:pt-8 h-1/2 md:w-[76vw] lg:w-1/2 md:h-full flex flex-col items-center md:items-start gap-5"
        >
          <h3
            className="font-[elgoc] text-3xl md:text-5xl px-5 transition-colors text-[#8245ec]"
            style={{ textShadow: '2px 2px 8px purple' }}
          >
            Short Intro
          </h3>

          <p className="text-xl md:text-2xl px-5 text-white/80">
            I’m Deepak Mane, a BCA graduate passionate about web & software development.
          </p>

          <p className="text-xl md:text-2xl px-5 text-white/80">
            I enjoy creating clean, responsive, and visually appealing websites using React and the MERN stack.
          </p>

          <p className="text-xl md:text-2xl px-5 text-white/80">
            Though I’m a fresher, I love learning new technologies and improving through hands-on projects.
          </p>

          <p className="text-xl md:text-2xl px-5 text-white/80">
            My goal is to grow as a developer and build web experiences that make a real impact.
          </p>

          {/* Connect Button */}
          <button
            ref={buttonRef}
            className="mx-5 mt-4 px-8 py-4 bg-green-800 hover:bg-green-500 cursor-pointer transition-all ease-in-out duration-300 rounded-2xl text-white/90 shadow-lg hover:shadow-green-500/50"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=9960633200&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl flex items-center justify-center gap-2"
            >
              Connect <FaWhatsapp />
            </a>
          </button>
        </div>

        {/* Right Side Image */}
        <div
          ref={rightSideRef}
          className="right-side w-full h-1/2 md:w-1/2 md:h-full flex justify-center text-center items-center"
        >
          <img
            src="/profile/profile1.jpg"
            alt="Profile"
            className="rounded-[10vw] w-1/2 md:w-[60vw] lg:w-[30vw] md:h-[90%] lg:h-[65%] md:mr-[-20vw] lg:mr-0 object-cover shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Myself;
