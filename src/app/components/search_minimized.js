import React, { useState } from 'react';

export default function MiniSearch(){
 
  return (
      <div class="flex items-center">
        <div class="p-2 min-h-[50px] w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
        <div class="flex w-full divide-x  row">
          {/* location */}
          <div
            class="p-2 border relative grid font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs px-6 rounded-full shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] block w-full rounded-r-none border-r-0"
            type="button">
            <div className='p-2'>
              Where?            
            </div>                
          </div>
          {/* Dates */}
          <div
            class="p-2 border grid font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs px-6 shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] block w-full rounded-r-none border-r-0"
            type="button">
            <div className='p-2'>
              When?      
            </div>              
          </div>      
          {/* Guests     */}
          <div class="p-2 flex flex-row border font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs px-6 shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] w-full rounded-full rounded-l-none border-r-0"
            type="button">
            <div className='p-2'>
              Guests            
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