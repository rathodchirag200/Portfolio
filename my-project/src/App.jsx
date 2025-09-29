import React, { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Skills } from "./skills";
import { Tools } from "./tools";
import { Project } from "./project";
import { Github } from "./github";
import { Contact } from "./contact";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`${theme === "dark" ? "bg-[#0B0C10] text-white" : "bg-white text-black"} transition-colors duration-500`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Tools theme={theme} />
      <Project theme={theme} />
      <Github theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;
