'use client'
import React, { useEffect } from "react";
import { useState } from "react";
import "@/app/globals.css"

function Timeline({timePoints,onUpdateProgress}){
    const [progress, setProgress] = useState(0); // Initial progress value
    const [activeTimePoint,setActiveTimePoint] = useState(timePoints[0])    

    // Function to update progress
    const updateProgress = (newValue) => {
      setProgress(newValue)    
    };

    const goBackTab = () => {
        const currentIndex = timePoints.indexOf(activeTimePoint);
        const newIndex = Math.max(0, currentIndex - 1);
        updateProgress(getProgressPercentage(timePoints[newIndex]));
        setActiveTimePoint(timePoints[newIndex]);
    };
  
    const goNextTab = () => {    
        const currentIndex = timePoints.indexOf(activeTimePoint);
        const newIndex = Math.min(timePoints.length - 1, currentIndex + 1);    
        updateProgress(getProgressPercentage(timePoints[newIndex]));
        setActiveTimePoint(timePoints[newIndex])
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
    useEffect(()=>{
        onUpdateProgress(activeTimePoint)
    },[activeTimePoint])

    return <>
    <section className="">
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
                    onClick={() =>{ 
                            updateProgress(getProgressPercentage(timePoint));
                            setActiveTimePoint(timePoint) 
                    }}
                    style={{ left: `${getProgressPercentage(timePoint)}%` }}>
                        <div className="grid bg-white p-3">
                            <div className={`justify-self-center bg-white rounded-full border h-6 w-6 border-4 ${activeTimePoint == timePoint ? "border-accent-1":""}`}></div>
                            <span>{timePoint}</span>                         
                        </div>       
                </div>
                </>
                })
            }
        </div>
        </div>

        <div className='mt-10 border p-1 rounded-full flex justify-between'>
          <button className='bg-secondary-1 text-white p-2 rounded-full text-nowrap'
          onClick={goBackTab}>            
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          </button>
          <button className='bg-secondary-1 text-white p-2 rounded-full text-nowrap'
          onClick={goNextTab}>            
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
          </button>
        </div>
    </section> 
    </>
}
export default Timeline