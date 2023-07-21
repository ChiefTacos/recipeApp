// "use client";

// import { createContext, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [mode, setMode] = useState("dark");

//   const toggle = () => {
//     setMode((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   return (
//     <ThemeContext.Provider value={{ toggle, mode }}>
//       <div className={`theme ${mode}`}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };
"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); // Initialize with light mode

  // Function to toggle between light and dark mode
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // useEffect to detect the client's preferred color scheme
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setMode(prefersDarkMode.matches ? "dark" : "light");

    // Listen for changes in the preferred color scheme and update mode accordingly
    const handleChange = (event) => {
      setMode(event.matches ? "dark" : "light");
    };

    prefersDarkMode.addEventListener("change", handleChange);

    // Cleanup the event listener on unmount
    return () => {
      prefersDarkMode.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};