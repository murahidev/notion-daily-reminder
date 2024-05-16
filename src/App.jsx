import React, { useState } from "react";
import ProgressBar from "./Components/ProgressBar";
import Time from "./Components/Time";
import QuoteSaying from "./Components/QuoteSaying";

export default function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`h-screen flex flex-col ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
      {/* Top section - Takes 3/5 of the screen (can grow if needed) */}
      <div className="flex flex-grow flex-row">
        <div className="w-1/2">
          <Time />
        </div>

        <div className="w-1/2">
          <QuoteSaying />
        </div>
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
