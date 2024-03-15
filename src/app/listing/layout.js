'use client'
import { useEffect, useState } from "react";
import Search from "../components/search";
import MiniSearch from "../components/search_minimized";
import NavScrollBehavior from "../components/nav_scroll_behavior";

export default function ListingLayout({children}) {
    const [showFilters,setShowFilters] = useState(false) 
    const [showNav,setShowNav] = useState(false)
    const [showFullNav,setShowFullNav] = useState(false)
    const [searchData,setSearchData] = useState({
      location:"Anywhere", 
      guests:{}, 
      dates:{ 
        startDate: null, 
        endDate: null 
      } 
    })
    const onShowNav=(value)=>{
        setShowNav(value)
    }
    const onShowNavFromMinisearch=(value)=>{
        if (value == true){
            setShowFullNav(true)
        }else{
            setShowFullNav(false)
        }
    }
    const onSearchDataChange=(value)=>{
        setSearchData(value)
    }
    useEffect(()=>{
        setShowNav(false)        

    },[])
    return (
      <>
        {/* Include shared UI here e.g. a header or sidebar */}
        <NavScrollBehavior onShowNav={onShowNav}>   
            <div className='bg-white'>                   
                {/* Search */}
                <div className="mt-0 flex flex-row justify-center bg-white">     
                    <div className='grid justify-items-center'>
                    { showFullNav ?
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
                    :null}
                    <div className={`sticky top-0 flex flex-row ${showFullNav ? "" : "hidden"}`}>            
                    
                        <Search onData={onSearchDataChange}/>
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
                    { showNav & ! showFullNav ?
                        <MiniSearch searchData={searchData} onShowNav={onShowNavFromMinisearch} className="p3"/>                
                        :
                        null
                    }
                    </div>             
                </div>                  
            </div>
        </NavScrollBehavior> 
        {/* spacer */}
        <div className='mt-20'></div>         
        <div className="">
            {children}
        </div>    
      </>
    )}