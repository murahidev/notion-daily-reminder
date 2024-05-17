/* npm run dev */
/* npm run deploy */

import React, { useEffect, useState } from "react";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import Time from "./Components/Time/Time";

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkColorMode = localStorage.getItem("colorMode");
    const parsedVal = JSON.parse(checkColorMode);

    if (parsedVal === true){
      setDarkMode(true);
    }

    else if (parsedVal === false){
      setDarkMode(false);
    }

    else {
      setDarkMode(false);
    }
  })

  return (
    <div className={`h-screen flex flex-col transition-colors rounded-lg ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
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
