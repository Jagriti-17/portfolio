import React from "react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/myPhoto.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Jagriti Poddar
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Web Developer",
                2000,
                "Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#60A5FA]"
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10">
            I am a Computer Science graduate passionate about software
            development and building responsive web applications using the MERN
            stack. I enjoy solving problems through Data Structures and
            Algorithms, exploring new technologies, and turning ideas into
            real-world projects. Currently, I am seeking Software Development
            Engineer opportunities to learn, contribute, and grow as a
            developer.
          </p>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(90deg,#2563EB,#3B82F6)",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-52 h-52 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] rounded-full border-4 border-[#3B82F6] overflow-hidden shadow-2xl">
            <img
              src={profileImage}
              alt="Jagriti Poddar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
