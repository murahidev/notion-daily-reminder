import "./Time.css";
import React, { useState, useEffect } from "react";

export default function Time() {
  const [endingStr, setEnding] = useState("");
  const [dayOfMonth, setDayOfMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  useEffect(() => {
    const currentDate = new Date();

    // Extract day of the month (1-31)
    const day = currentDate.getDate();
    setDayOfMonth(day);

    // Extract day of the week (0-6, where 0 is Sunday and 6 is Saturday)
    const dayOfWeek = currentDate.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[dayOfWeek];
    setDayOfWeek(dayName);

    // Extract month (0-11, where 0 is January and 11 is December)
    const month = currentDate.getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = months[month];
    setMonth(monthName);

    // Extract year (e.g., 2024)
    const year = currentDate.getFullYear();
    setYear(year)

    // Determine ending string
    let ending = "";
    if (day === 1 || day === 21 || day === 31) {
      ending = "st";
    } else if (day === 2 || day === 22) {
      ending = "nd";
    } else if (day === 3 || day === 23) {
      ending = "rd";
    } else {
      ending = "th";
    }
    setEnding(ending);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="YearPosition">
        {dayOfMonth}
        {endingStr}
      </div>
      <div className="YearPositionTwo">
        <p>{dayOfWeek}, {month} {year}</p>
      </div>
    </div>
  );
}
