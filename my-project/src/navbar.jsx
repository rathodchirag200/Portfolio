import React, { useState } from 'react';
import { MdOutlineLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md";

export const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking a link on mobile
  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  const menuItems = (
    <>
      <li className="hover:text-blue-500 transition" onClick={handleLinkClick}><a href="#home">Home</a></li>
      <li className="hover:text-blue-500 transition" onClick={handleLinkClick}><a href="#about">About</a></li>
      <li className="hover:text-blue-500 transition" onClick={handleLinkClick}><a href="#skills">Skills</a></li>
      <li className="hover:text-blue-500 transition" onClick={handleLinkClick}><a href="#projects">Projects</a></li>
      <li className="hover:text-blue-500 transition" onClick={handleLinkClick}><a href="#contact">Contact</a></li>
      <li className="cursor-pointer" onClick={toggleTheme}>
        {theme === 'dark' ?
          <MdOutlineLightMode className="w-6 h-6 md:w-7 md:h-7 hover:text-blue-500 transition" /> :
          <MdDarkMode className="w-6 h-6 md:w-7 md:h-7 hover:text-blue-500 transition" />
        }
      </li>
    </>
  );

  return (
    <header className={`fixed w-full top-0 z-50 shadow-md border-b transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0B0C10] border-white text-white' : 'bg-white border-black text-black'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-[70px] px-6 md:px-10">
        
        {/* Logo */}
        <div className="text-blue-500 text-2xl md:text-3xl font-bold">
          <a href="#home" onClick={handleLinkClick}>CHIRAG</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 md:space-x-10 text-lg md:text-xl">
          {menuItems}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className={`flex flex-col items-center space-y-4 py-4 text-lg md:hidden ${theme === 'dark' ? 'bg-[#0B0C10] text-white border-t border-white' : 'bg-white text-black border-t border-black'}`}>
          {menuItems}
        </ul>
      )}
    </header>
  );
};
