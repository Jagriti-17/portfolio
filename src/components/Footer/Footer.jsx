import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Smooth Scroll
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="border-t border-slate-700 py-10 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="max-w-6xl mx-auto text-center">

        {/* Name */}
        <h2 className="text-2xl font-bold text-[#60A5FA]">
          Jagriti Poddar
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-slate-300 hover:text-[#60A5FA] transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-8 text-2xl">

          <a
            href="https://github.com/Jagriti-17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#60A5FA] transition-all duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jagritipoddar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#60A5FA] transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#60A5FA] transition-all duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Copyright */}
        <p className="mt-8 text-sm text-slate-400">
          © {new Date().getFullYear()} Jagriti Poddar. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;