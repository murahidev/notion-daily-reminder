import React, { useState } from "react";
import ProgressBar from "./Components/ProgressBar";
import Time from "./Components/Time";

export default function App() {

  const [displayMode, setDisplayMode] = useState(null);

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      {/* Top section - Takes 3/5 of the screen (can grow if needed) */}
      <div className="flex flex-grow flex-row">
        <div className="w-1/2">
          <Time />
        </div>

        <div className="w-1/2">
        </div>
      </div>

      {/* Bottom section - Takes 2/5 of the screen (fixed height) */}
      <div className="h-1/5">
        <ProgressBar 
          displayMode={displayMode}
          setDisplayMode={setDisplayMode}
        />
      </div>
    </div>
  );
}
