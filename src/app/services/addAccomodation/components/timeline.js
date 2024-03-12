'use client'
import React from "react";
import { useState } from "react";
import "@/app/globals.css"

function Timeline({timePoints,onUpdateProgress}){
    const [progress, setProgress] = useState(0); // Initial progress value

    // Function to update progress
    const updateProgress = (newValue) => {
      setProgress(newValue);
    };

    const getProgressPercentage = (timePoint) => {
        const indexOfTimePoint = timePoints.indexOf(timePoint);
        const lengthOfTimePoints = timePoints.length - 1; // Adjusted length
    
        if (indexOfTimePoint === 0) {
            return 0; // If it's the first element, return 0%
        } else if (indexOfTimePoint === lengthOfTimePoints) {
            return 100; // If it's the last element, return 100%
        } else {
            return (indexOfTimePoint / lengthOfTimePoints) * 100;
        }
    };
    
    return <>
<div className="timeline">
      {/* Progress Bar */}
      <div
        className="progress-bar bg-accent-1 h-20 rounded-full"
        style={{ width: `${progress}%`, transition: "width 1s ease-in-out" }}
      ></div>

      {/* Time Points */}
      <div className="time-points">
        { timePoints.map((timePoint)=>{
            return<>
            <div
                className="time-point"
                onClick={() => updateProgress(getProgressPercentage(timePoint))}
                style={{ left: `${getProgressPercentage(timePoint)}%` }}>
                    <div className="grid rounded-full bg-white p-3">
                        <div className="justify-self-center bg-white rounded-full border h-6 w-6 border-4"></div>
                        <span>{timePoint}</span>                         
                    </div>       
            </div>
            </>
            })
        }
      </div>
    </div>
    </>
}
export default Timeline