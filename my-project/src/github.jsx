import React from "react";

export const Github = ({ theme }) => {
  const username = "rathodchirag200"; // your GitHub username
  const iconColor = "2b7fff"; // desired icon color
  const isDark = theme === 'dark';
  const cardTheme = isDark ? "dark" : "light";

  return (
    <section className={`py-12 px-8 transition-colors duration-500 ${isDark ? 'bg-[#0B0C10] text-white' : 'bg-white text-black'}`}>
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className={`text-4xl md:text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
          My <span className="text-blue-500">GitHub Stats</span>
        </h2>
        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mt-2`}>
          Some of my GitHub activity and top programming languages
        </p>
      </div>

      {/* GitHub Stats Cards */}
      <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
        {/* GitHub Stats */}
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${cardTheme}&hide_border=true&count_private=true&icon_color=${iconColor}`} 
          alt="GitHub Stats"
          className="h-48 md:h-56 rounded-lg shadow-xl transform transition duration-300 ring-4 ring-blue-500"
        />

        {/* Top Languages */}
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${cardTheme}&hide_border=true&icon_color=${iconColor}`}
          alt="Top Languages"
          className="h-48 md:h-56 rounded-lg shadow-xl transform transition duration-300 ring-4 ring-blue-500"
        />
      </div>
    </section>
  );
};
