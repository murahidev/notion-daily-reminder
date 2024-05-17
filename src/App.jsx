import React, { useState } from "react";
import ProgressBar from "./Components/ProgressBar";
import Time from "./Components/Time";
import QuoteSaying from "./Components/QuoteSaying";

export default function App() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem("colorMode"))

  return (
    <div className={`h-screen flex flex-col transition-colors ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
      {/* Top section - Takes 3/5 of the screen (can grow if needed) */}
      <div>
        <Time />
      </div>

      {/* Bottom section - Takes 2/5 of the screen (fixed height) */}
      <div className="h-1/5">
        <ProgressBar 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </div>
  );
}
