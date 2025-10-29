import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Foot = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-2xl font-[elgoc] text-purple-500">Deepak Mane</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "About", id: "myself" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-2">
          {[
            { icon: <FaTwitter />, link: "https://x.com/Deepak_1902", color: "bg-sky-400 hover:bg-sky-500" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mane-deepak/", color: "bg-blue-700 hover:bg-blue-800" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/_deepak.mane/", color: "bg-pink-500 hover:bg-pink-600" },
            { icon: <FaGithub />, link: "https://github.com/Deepak-Mane1902/", color: "bg-gray-800 hover:bg-white/80 hover:text-black/90" },
    // { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt", color: "bg-red-600 hover:bg-red-700" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white p-3 rounded-full text-xl transition-transform transform hover:scale-110 flex items-center justify-center ${item.color}`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Deepak_Mane. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Foot;