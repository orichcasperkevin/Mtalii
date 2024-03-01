"use client"
import React, { useState } from 'react';
import Image from "next/image";
import ProfileIcon from "./components/profile_icon";
import Search from "./components/search";
import SearchFilters from "./components/search_filters/search_filters";

export default function Home() {
  const [showFilters,setShowFilters] = useState(false)

  return (
    <main className="px-4 py-2 ">
      <div className="container mt-2 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="ZZ logo"            
            width={30}
            height={30}
            priority
          />
          <h1 className="text-lg font-bold ml-2">Mtalii</h1>
        </div>
        
        {/* Navigation */}
        <nav className="space-x-4">
          <a className="text-gray-700 font-bold hover:text-gray-900" href="#">Destinations</a>
          <span>&#183;</span>
          <a className="text-gray-700 hover:text-gray-900" href="#">Activities</a>  
        </nav>
        <div>
          <a href="#" className="p-4 text-blue-600">Become a host</a>
          {/* Profile Icon */}        
          <ProfileIcon/>
        </div>      
      </div>

      {/* Search */}
      <div className="relative flex flex-row justify-center">        
        <Search/> 
        { showFilters ?
        <div className="absolute border rounded-lg shadow-lg w-sreen" style={{ top: '100%' }}>
          <SearchFilters/>
        </div>
        : null }
      </div>
      <hr></hr>
    </main>

  );
}
