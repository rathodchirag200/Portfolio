import React from "react";
import { FaGithub, FaExternalLinkAlt, FaNodeJs } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiHtml5, SiJavascript, SiCss3 } from "react-icons/si";

export const Project = ({ theme }) => {
  const isDark = theme === 'dark';

  const projects = [
    {
      name: "Swiggy Clone",
      tech: [
        { icon: <SiReact className="text-blue-500" />, name: "React" },
        { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
        { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
        { icon: <SiJavascript className="text-yellow-400" />, name: "JS" },
      ],
      live: "https://swiigy-clone-3.vercel.app/",
      github: "https://github.com/rathodchirag200/SwiigyClone",
      image: "/image1.png",
    },
    {
      name: "Todo List",
      tech: [
        { icon: <SiReact className="text-blue-500" />, name: "React" },
        { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
        { icon: <SiCss3 className="text-blue-600" />, name: "CSS" },
        { icon: <SiJavascript className="text-yellow-400" />, name: "JS" },
        { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
      ],
      live: "https://todo-list-ochre-xi.vercel.app/",
      github: "https://github.com/rathodchirag200/TodoList",
      image: "/image2.png",
    },
    {
      name: "Trendzy (Full-Stack E-commerce)",
      tech: [
        { icon: <SiReact className="text-blue-500" />, name: "React" },
        { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
        { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
        { icon: <SiJavascript className="text-yellow-400" />, name: "JS" },
      ],
      live: "https://ecomerce-website-tau.vercel.app/",
      github: "https://github.com/rathodchirag200/Ecomerce-Website",
      image: "/image3.png",
    },
  ];

  return (
    <section 
      id="projects" // <-- Add this ID
      className={`py-16 px-8 transition-colors duration-500 ${isDark ? 'bg-[#0B0C10] text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-black'}`}>
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md flex flex-col transition transform hover:scale-105 hover:ring-4 hover:ring-blue-500 hover:shadow-blue-500/40 ${
                isDark ? 'bg-[#1A1A1D]' : 'bg-gray-100'
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              <div className="p-6 flex flex-col flex-1">
                <h3 className={`${isDark ? 'text-white' : 'text-black'} text-xl font-bold mb-4`}>{project.name}</h3>

                <div className="mb-4 text-left">
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold mb-2`}>Tech Stack:</p>
                  <div className="flex gap-4 text-2xl">
                    {project.tech.map((tech, idx) => (
                      <div
                        key={idx}
                        className="transition transform hover:scale-125"
                        title={tech.name}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-auto gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-4 rounded-md font-semibold text-sm flex items-center justify-center gap-2 transition ${
                      isDark ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-4 rounded-md font-semibold text-sm flex items-center justify-center gap-2 transition ${
                      isDark ? 'bg-gray-700 text-white hover:bg-blue-500' : 'bg-gray-300 text-black hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
