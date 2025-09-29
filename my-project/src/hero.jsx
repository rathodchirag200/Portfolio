import React from 'react';

export const Hero = ({ theme }) => {
  const isDark = theme === 'dark';

  // Smooth scroll handler
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`pt-[170px] flex items-center justify-center px-3 transition-colors duration-500 ${
        isDark ? 'text-white' : 'text-black'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12">
        <div>
          <p className="text-xl mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-3">
            Chirag <span className="text-blue-500">Rathod</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 inline-block px-3 py-1 rounded">
            Full-Stack Developer
          </h2>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-blue-500 text-white text-lg rounded-md font-semibold border-2 border-transparent hover:bg-blue-600 hover:border-white transition"
            >
              Contact Me
            </button>
            <a
              href="/Chirag-Rathod-Resume1.pdf"
              download
              className="px-8 py-3 bg-transparent text-blue-500 text-lg rounded-md font-semibold border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="chirag.jpg"
            alt="Profile"
            className="w-[300px] h-[300px] rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
