import React from "react";
import { SiGithub, SiGit, SiPostman, SiFigma, SiNetlify } from "react-icons/si";
import { FaCode, FaServer, FaCloud } from "react-icons/fa"; // VS Code, Render, AWS alternatives

export const Tools = ({ theme }) => {
  const isDark = theme === 'dark';

  const tools = [
    { name: "Git", icon: <SiGit className="text-red-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-300 w-10 h-10 md:w-12 md:h-12" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: "Render", icon: <FaServer className="text-green-400 w-10 h-10 md:w-12 md:h-12" /> },
    { name: "Netlify", icon: <SiNetlify className="text-blue-400 w-10 h-10 md:w-12 md:h-12" /> },
    { name: "AWS", icon: <FaCloud className="text-yellow-400 w-10 h-10 md:w-12 md:h-12" /> },
  ];

  return (
    <section className={`py-16 px-8 transition-colors duration-500 ${isDark ? 'bg-[#0B0C10] text-white' : 'bg-white text-black'}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-black'}`}>
          My <span className="text-blue-500">Tools</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`p-6 flex flex-col items-center justify-center rounded-lg shadow-md cursor-pointer transition-all transform hover:scale-105 hover:ring-4 hover:ring-blue-500 hover:shadow-blue-500/40 ${
                isDark ? 'bg-[#1A1A1D]' : 'bg-gray-100'
              }`}
            >
              {tool.icon}
              <p className={`${isDark ? 'text-white' : 'text-black'} mt-3 font-semibold`}>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
