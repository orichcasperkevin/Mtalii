"use client"
import React, { useState } from 'react';
import Image from "next/image";
import ProfileIcon from "./components/profile_icon";
import Search from "./components/search";
import SearchFilters from "./components/search_filters/search_filters";
import CategoryFilter from './components/category_filter';

export default function Home() {
  const [showFilters,setShowFilters] = useState(false)

  return (
    <main className="">      
      <div className="p-3 w-screen flex justify-between bg-gray-200">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="ZZ logo"            
            width={50}
            height={50}
            priority
          />
          <nav className="space-x-4 p-3 ml-3">            
            <a className="text-gray-700 font-bold hover:text-gray-900" href="#">Explore Destinations</a>            
            <a className="text-gray-700 hover:text-gray-900" href="#">Itenary</a>  
            <a className="text-gray-700 hover:text-gray-900" href="#">Bookings</a>  
          </nav>
        </div>        
        <div className='space-x-4'>
          <a href="#" className="text-gray-600">Switch to services</a>
          {/* Profile Icon */}        
          <ProfileIcon/>
        </div>      
      </div>

      {/* Search */}
      <div className="relative flex flex-row justify-center">     
        <div className='grid justify-items-center'>
          <nav className="space-x-4 p-3 ml-3">            
            <a className="text-gray-700 font-bold hover:text-gray-900" href="#">Accomodations</a>            
            <span>&#x2022;</span>
            <a className="text-gray-700 hover:text-gray-900" href="#">Activities</a> 
            <span>&#x2022;</span> 
            <a className="text-gray-700 hover:text-gray-900" href="#">Flights</a>  
            <span>&#x2022;</span>
            <a className="text-gray-700 hover:text-gray-900" href="#">Train</a>  
            <span>&#x2022;</span>
            <a className="text-gray-700 hover:text-gray-900" href="#">Cruise</a>              
          </nav>  
        <div className='flex flex-row'>
        <Search/>
        <div className='p-3'>
          <button
              onClick={(e)=>{e.preventDefault();setShowFilters(true)}}
              class="flex flex-row mt-3 select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-gray-900 rounded-full p-3 bg-gray-100 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>              
          </button>
        </div>
        </div>                
        </div>          
        { showFilters ?
        <div className="absolute border rounded-lg shadow-lg w-sreen" style={{ top: '100%' }}>
          <SearchFilters/>
        </div>
        : null }
      </div>
      <hr></hr>
      <div className='flex flex-row'>
        <CategoryFilter className="w-3/4 border"/>        
      </div>
    </main>

  );
}
