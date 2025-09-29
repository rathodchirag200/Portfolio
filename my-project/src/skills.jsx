import React from "react";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiMysql } from "react-icons/si";
import { MdDesignServices } from "react-icons/md"; // Material UI icon alternative

export const Skills = ({ theme }) => {
  const isDark = theme === 'dark';

  const skills = [
    { name: "React", icon: <SiReact className="text-blue-400 w-12 h-12" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-12 h-12" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400 w-12 h-12" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-12 h-12" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-12 h-12" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 w-12 h-12" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600 w-12 h-12" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 w-12 h-12" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700 w-12 h-12" /> },
    { name: "Material UI", icon: <MdDesignServices className="text-blue-500 w-12 h-12" /> },
  ];

  return (
    <section 
      id="skills" // Add ID for navbar scroll
      className={`py-16 px-8 transition-colors duration-500 ${isDark ? 'bg-[#0B0C10] text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-black'}`}>
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg flex flex-col items-center justify-center 
                          transition transform hover:scale-110 hover:ring-4 hover:ring-blue-500 hover:shadow-lg
                          ${isDark ? 'bg-[#1A1A1D]' : 'bg-gray-100'}`}
            >
              {skill.icon}
              <p className={`${isDark ? 'text-white' : 'text-black'} mt-4 font-semibold`}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
