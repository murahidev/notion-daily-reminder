import "./ProgressBar.css"
import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ProgressBar({displayMode, setDisplayMode}){

    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateProgress = () => {
        const now = new Date();
        const totalMillisecondsInDay = 24 * 60 * 60 * 1000; // Total milliseconds in a day
        const millisecondsPassed = now.getHours() * 60 * 60 * 1000 + now.getMinutes() * 60 * 1000 + now.getSeconds() * 1000 + now.getMilliseconds();
        const percentage = Math.floor((millisecondsPassed / totalMillisecondsInDay) * 100);
        setProgress(percentage);
        };

        updateProgress(); // Initial update
        const intervalId = setInterval(updateProgress, 60000); // Update every minute

        return () => clearInterval(intervalId); // Cleanup
        
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    
    return(
        <div className="flex justify-around items-center">
            {isHovered && (
                    <div className="PopUpText absolute bottom-2.5">
                        {progress}% of the day has passed
                    </div>
            )}

            <div className="StartTIme">
                <FiSun />
            </div>

            <div
                className="w-full bg-gray-300 h-1 rounded"
                style={{width: "70vw" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="bg-green-500 h-1 rounded"
                    style={{width: `${progress}%`}}
                > 
                </div>
            </div>

            <div className="EndTime">
                <FiMoon />
            </div>
        </div>
    )
}