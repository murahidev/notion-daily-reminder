import "./ProgressBar.css"
import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ProgressBar({darkMode, setDarkMode}){

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

    const lightModeToggle = () => {
        // True = Light
        if (darkMode === true) {
            console.log("Already Light");
        }
        else {
            const updatedDarkMode = true;
            setDarkMode(updatedDarkMode);
            localStorage.setItem("colorMode", updatedDarkMode);
        }
    }

    const darkModeToggle = () => {
        // False = Dark
        if (darkMode === false) {
            console.log("Already Dark")
        }
        else {
            const updatedDarkMode = false;
            setDarkMode(updatedDarkMode);
            localStorage.setItem("colorMode", updatedDarkMode);
        }
    }
    
    return(
        <div className="flex justify-around items-center">
            {isHovered && (
                    <div className="PopUpText absolute bottom-2.5 p-1">
                        {progress}% of the day has passed
                    </div>
            )}

            <div className="StartTIme">
                <button 
                    className="Sun hover:bg-gray-500 rounded"
                    onClick={lightModeToggle}
                >
                    <FiSun />
                </button>
            </div>

            <div
                className="w-full bg-gray-300 h-2 rounded"
                style={{width: "60vw" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="bg-green-500 h-2 rounded"
                    style={{width: `${progress}%`}}
                > 
                </div>
            </div>

            <div className="EndTime">
                <button 
                    className="Moon hover:bg-gray-500 rounded"
                    onClick={darkModeToggle}
                >
                    <FiMoon />
                </button>
            </div>
        </div>
    )
}