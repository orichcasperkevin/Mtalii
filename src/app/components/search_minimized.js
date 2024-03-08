import React, { useState } from 'react';

export default function MiniSearch({searchData}){
    // Set default values for searchData if it's empty
    const { location = "Anywhere", guests = {}, dates = { startDate: null, endDate: null } } = searchData;

    // Calculate total number of guests
    const totalGuests = Object.values(guests).reduce((total, count) => total + count, 0);

    const { startDate = null, endDate = null } = dates;
 
  return (
      <div class="flex items-center">
        <div class="p-2 min-h-[50px] w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
        <div class="flex w-full divide-x  row">
          {/* location */}
          <div
            class="p-2 border text-nowrap relative grid font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs px-6 rounded-full shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] block w-full rounded-r-none border-r-0"
            type="button">
            <div className='p-2'>
              {location ?
              <>{location}</>
              :
              "Anywhere"
              }            
            </div>                
          </div>
          {/* Dates */}
          <div
            class="p-2 border text-nowrap grid font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs px-6 shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] block w-full rounded-r-none border-r-0"
            type="button">
            <div className='p-2'>
              { startDate ?
              <>{startDate} to {endDate}</>
              :
              <>Any day</>
              }
              
            </div>              
          </div>      
          {/* Guests     */}
          <div class="p-2 flex flex-row text-nowrap border font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs px-6 shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] w-full rounded-full rounded-l-none border-r-0"
            type="button">
            <div className='p-2'>
              {totalGuests} guests        
            </div>        
            <button className="ml-2 bg-accent-1 rounded-full p-1">                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>                       
          </div>          
        </div>
      </div>
      </div>
    )
}