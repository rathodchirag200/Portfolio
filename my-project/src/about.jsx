import React from "react";
import { FaGraduationCap, FaLaptopCode, FaBookOpen } from "react-icons/fa";

export const About = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`pt-25 py-16 px-8 transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="text-blue-500">Me</span>
        </h2>
        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg mb-12`}>Introduction</p>

        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-12 max-w-3xl mx-auto`}>
          I am a passionate <span className="text-blue-400">Full-Stack Developer</span> with expertise in building web applications, integrating APIs, and developing full-stack solutions. My journey is backed by strong education and professional experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className={`${isDark ? 'bg-[#1A1A1D]' : 'bg-gray-100'} p-6 rounded-lg shadow-md hover:shadow-blue-500/40 transition`}>
            <FaGraduationCap className="text-blue-400 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-blue-400 mb-2">Education</h4>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} list-disc list-inside space-y-1`}>
              <li>12th in Ashadeep Vidhaylay 6</li>
              <li>Currently in 3rd Year BCA at Sutex Bank College</li>
              <li>1st Year CGPA: 8.00</li>
              <li>2nd Year CGPA: 7.50</li>
            </ul>
          </div>

          <div className={`${isDark ? 'bg-[#1A1A1D]' : 'bg-gray-100'} p-6 rounded-lg shadow-md hover:shadow-blue-500/40 transition`}>
            <FaLaptopCode className="text-blue-400 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-blue-400 mb-2">Specialization</h4>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              I specialize in <span className="text-blue-400">MERN stack development</span>, API integrations, and creating efficient, user-friendly applications that solve real-world problems.
            </p>
          </div>

          <div className={`${isDark ? 'bg-[#1A1A1D]' : 'bg-gray-100'} p-6 rounded-lg shadow-md hover:shadow-blue-500/40 transition`}>
            <FaBookOpen className="text-blue-400 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-blue-400 mb-2">Continuous Learning</h4>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              I'm constantly learning new technologies and methodologies to stay at the forefront of software development practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
