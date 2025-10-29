import React, { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt';
import BlurBulb from "../../BlurBulb";
import gsap from "gsap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(
      rightRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const handleDownload = () => {
    const fileUrl = "/resume/cv.pdf";

    fetch(fileUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("File not found");
        }
        // Programmatically create an anchor to trigger download
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast.success("Successfully started downloading the file!");
      })
      .catch(() => {
        toast.error("Error occurred while downloading the file.");
      });
  };

  return (
    <section
      id="about"
      className="py-4 pb-10 px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div
          ref={leftRef}
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 opacity-0"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[elgoc] text-white mb-2 leading-tight space-x-1">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-[elgoc] mb-1 md:mb-4 leading-8">
            Deepak Mane
          </h2>
          <p className="text-lg font-[elgoc] sm:text-2xl md:text-lg font-semibold mt-4 md:mt-6 leading-6 text-white/70">
            I’m passionate about becoming a Software Developer, with a strong focus on building modern, user-friendly, and efficient web applications. I enjoy transforming ideas into scalable digital solutions using the MERN stack and exploring new technologies to stay ahead in this fast-moving tech world.
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

          <button
            onClick={handleDownload}
            className="btn-dwn-cv mt-4 w-[40vw] md:w-auto  py-4 px-[4vw] mx-30 md:mx-0 rounded-2xl bg-[#2b0a66] border-none hover:bg-[#8245ec] cursor-pointer flex gap-2 items-center transition-all ease-in-out duration-150"
          >
            <span className="flex justify-center md:justify-start gap-2 items-center text-white/70 hover:text-white">
              Download CV
              <FiArrowRight className="text-2xl hover:pl-1" />
            </span>
          </button>
        </div>

        {/* Right Side */}
        <div
          ref={rightRef}
          className="md:w-1/2 flex justify-center md:justify-end opacity-0"
        >
          <BlurBulb position={{ top: "4%", left: "75%" }} size={{ width: "30%", height: "5%" }} />
          <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30vw] md:h-1/2 border-4 border-purple-700 rounded-full">
            <video
              src="./video/dev.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              alt="User Profile Image"
              className="md:w-full w-[200vw] md:h-1/2 h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] blub-animation-video duration-100"
            />
          </Tilt>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </section>
  );
};

export default Hero;
