// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          SKILLS
        </h2>

        <div className="w-24 h-1 bg-[#3B82F6] mx-auto mt-2"></div>

        <p className="mt-4 text-base md:text-lg text-slate-300 font-medium tracking-wide leading-7 max-w-3xl mx-auto">
  A collection of technical skills I've developed through projects,
  internships, and continuous learning.
</p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap justify-between gap-6 py-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="w-full sm:w-[48%] rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-500/20"
          >
           <div className="flex flex-col items-center mb-6 group">
  <h3 className="text-2xl font-semibold text-white">
    {category.title}
  </h3>

  <div className="w-10 h-[2px] bg-[#3B82F6] rounded-full mt-2 transition-all duration-300 group-hover:w-16"></div>
</div>

            {/* Skill Items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-600 bg-slate-800/60 px-3 py-2 transition-all duration-300 hover:border-[#60A5FA] hover:bg-slate-700 hover:scale-105"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />

                  <span className="text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;