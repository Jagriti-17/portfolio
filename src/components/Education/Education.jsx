import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          EDUCATION
        </h2>

        <div className="w-24 h-1 bg-[#3B82F6] rounded-full mx-auto mt-3"></div>

        <p className="mt-4 text-base md:text-lg text-slate-300 font-medium tracking-wide leading-7 max-w-3xl mx-auto">
          My academic journey has provided a strong foundation in computer
          science, software development, and problem-solving.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-slate-600"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Education Card */}
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
                  ? "sm:ml-24"
                  : "sm:mr-24"
              }`}
            >
              {/* College Logo & Details */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>

                  <h4 className="text-[#60A5FA] font-medium">
                    {edu.school}
                  </h4>

                  <p className="text-sm text-slate-400 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-5 text-white font-medium">
                Grade:{" "}
                <span className="text-[#60A5FA]">{edu.grade}</span>
              </p>

              {/* Description */}
              <p className="mt-4 text-slate-300 leading-7">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;