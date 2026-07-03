import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#1E293B]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="text-lg font-bold cursor-pointer select-none">
          <span className="text-[#60A5FA]">&lt;</span>
          <span className="text-white">Jagriti</span>
          <span className="text-[#60A5FA]">/</span>
          <span className="text-white">Poddar</span>
          <span className="text-[#60A5FA]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "text-gray-300 hover:text-[#60A5FA]"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <a
            href="https://github.com/Jagriti-17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#60A5FA] transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/jagritipoddar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#60A5FA] transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#60A5FA] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#60A5FA] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5 rounded-xl bg-[#1E293B]/95 backdrop-blur-lg shadow-xl md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6">
            {menuItems.map((item) => (
              <li key={item.id} className="w-full flex justify-center">
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-4/5 px-4 py-2 rounded-md transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-[#2563EB] text-white"
                      : "text-gray-300 hover:text-[#60A5FA]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-6 pt-2">
              <a
                href="https://github.com/Jagriti-17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#60A5FA] transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://linkedin.com/in/jagritipoddar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#60A5FA] transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;