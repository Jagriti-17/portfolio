import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          EXPERIENCE
        </h2>

        <div className="w-24 h-1 bg-[#3B82F6] rounded-full mx-auto mt-3"></div>

        <p className="mt-4 text-base md:text-lg text-slate-300 font-medium tracking-wide leading-7 max-w-3xl mx-auto">
          My professional journey through internships and industry experience,
          where I contributed to real-world projects and strengthened my
          technical skills.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-slate-600"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Card */}
            <div
              className={`w-full sm:max-w-md ml-8 sm:ml-0 rounded-2xl
              border border-slate-700
              bg-slate-900/80
              backdrop-blur-md
              shadow-lg
              p-6
              transition-all duration-300
              hover:scale-105
              hover:border-[#3B82F6]
              hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
              ${
                index % 2 === 0
                  ? "sm:mr-24"
                  : "sm:ml-24"
              }`}
            >
              {/* Company */}
              <div className="flex items-center gap-5">

                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>

                  <h4 className="text-[#60A5FA] font-medium">
                    {experience.company}
                  </h4>

                  <p className="text-sm text-slate-400 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-slate-300 leading-7">
                {experience.desc}
              </p>

            
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;