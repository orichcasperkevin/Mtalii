"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import Image from "next/image";
import ProfileIcon from "./components/profile_icon";
import Search from "./components/search";
import MiniSearch from './components/search_minimized';
import SearchFilters from "./components/search_filters/search_filters";
import CategoryFilter from './components/category_filter';
import NavScrollBehavior from './components/nav_scroll_behavior';
import Modal from './components/modal';
import Login from './components/login';
import Signup from './components/signup';
import Accomodations from './components/accomodations';
import Activies from './components/activities';
import ActivityFilters from './components/activity_filters';
import FlightCards from './components/flights';
import FlightFilters from './components/flight_filters';
const ACCOMODATIONS_TAB = 1,
      ACTIVITIES_TAB = 2,
      FLIGHTS_TAB = 3;
      // TRAINS_TABS = 4,
      // CRUISE_TAB = 5;


export default function Home() {  
  const [showFilters,setShowFilters] = useState(false) 
  const [showNav,setShowNav] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  const [showSignUp,setShowSignup] = useState(false)
  const [activeTab,setActiveTab] = useState(ACCOMODATIONS_TAB)
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
  const onSearchDataChange=(value)=>{
    setSearchData(value)
  }
  const onShowLogin=()=>{    
    setShowLogin(true)
  }
  const onShowSignup=()=>{
    setShowSignup(true)
  }
  const switchTab=(tab)=>{
    setActiveTab(tab)
  }

  return (
    <main>  
      <NavScrollBehavior onShowNav={onShowNav}>   
        <div className='bg-white'>
          <div className="p-3 flex justify-between bg-gray-200">
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
                  <a className="text-gray-700 font-bold hover:text-gray-900" >Explore Destinations</a>            
                  <Link className="text-gray-700 hover:text-gray-900" href="/itenary">Itenary</Link>                     
                </nav>              
            </div>        
            <div className='space-x-4'>
              <Link href="/services" className="text-gray-600">Switch to services</Link>
              {/* Profile Icon */}        
              <ProfileIcon onShowLogin={onShowLogin} onShowSignup={onShowSignup}/>
            </div>      
          </div>      
          {/* Search */}
          <div className="mt-0 flex flex-row justify-center bg-white">     
            <div className='grid justify-items-center'>
              { showNav ?
                <nav className="space-x-4 p-3 ml-3">            
                  <a className={`cursor-pointer text-gray-700 hover:text-gray-900 ${activeTab === ACCOMODATIONS_TAB ? 'font-bold' : ''}`} 
                    onClick={()=>{switchTab(ACCOMODATIONS_TAB)}}>
                    Accomodations
                  </a>            
                  <span>&#x2022;</span>
                  <a className={`cursor-pointer text-gray-700 hover:text-gray-900 ${activeTab === ACTIVITIES_TAB ? 'font-bold' : ''}`} 
                   onClick={()=>{switchTab(ACTIVITIES_TAB)}}>
                    Activities
                  </a> 
                  <span>&#x2022;</span> 
                  <a className={`cursor-pointer text-gray-700 hover:text-gray-900 ${activeTab === FLIGHTS_TAB ? 'font-bold' : ''}`} 
                  onClick={()=>{switchTab(FLIGHTS_TAB)}}>
                    Flights</a>  
                  {/* <span>&#x2022;</span>
                  <a className="text-gray-700 hover:text-gray-900"
                    onClick={()=>{switchTab(TRAINS_TABS)}}>
                    Train
                  </a>  
                  <span>&#x2022;</span>
                  <a className="text-gray-700 hover:text-gray-900"
                    onClick={()=>{switchTab(CRUISE_TAB)}}>Cruise</a>               */}
                </nav>  
              :null}
            <div className={`sticky top-0 flex flex-row ${showNav ? "" : "hidden"}`}>            
              
                <Search onData={onSearchDataChange}/>
                <div className='p-3'>
                <button
                    onClick={(e)=>{e.preventDefault();setShowFilters(true)}}
                    className="flex flex-row mt-3 select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-gray-900 rounded-full p-3 bg-gray-100 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>              
                </button>
              </div>           
            </div>  
            { ! showNav ?
              <MiniSearch searchData={searchData} onShowNav={onShowNav} className="p3"/>                
              :
              null
            }
            </div>          
            { showFilters ?
              <div className="absolute border rounded-lg shadow-lg w-sreen" style={{ top: '100%' }}>
                <SearchFilters/>
              </div>
            : null }
          </div>
          <div className='flex flex-row bg-white p-3'>
            {activeTab == ACCOMODATIONS_TAB ?
              <CategoryFilter/>              
            :null}     
            {activeTab == ACTIVITIES_TAB ?
              <ActivityFilters/>              
            :null}
            {activeTab == FLIGHTS_TAB ?
              <FlightFilters/>              
            :null}
          </div>
          <hr></hr>
        </div>
      </NavScrollBehavior> 
      {/* spacer */}
      <div className='mt-80'></div>  

      {/* ACCOMODATIONS */}
      {activeTab == ACCOMODATIONS_TAB ?
      <section className="mt-3 flex flex-row justify-center">
          <Accomodations/>
      </section>
      :null}
      {/* ACTIVITIES */}
      {activeTab == ACTIVITIES_TAB ?
      <section className="mt-3 flex flex-row justify-center">
          <Activies/>
      </section>
      :null}
      {/* FLIGHTS */}
      {activeTab == FLIGHTS_TAB ?
      <section className="mt-3 flex flex-row justify-center">
          <FlightCards/>
      </section>
      :null}

      {/* Modal */}
      <section>
        <Modal isOpen={showLogin} onClose={()=>{setShowLogin(false)}} title="Login">
            <Login onLoggedIn={()=>{setShowLogin(false)}}/>
        </Modal>
        <Modal isOpen={showSignUp} onClose={()=>setShowSignup(false)} title="Sign Up">
          <Signup/>
        </Modal>
      </section>
    </main>

  );
}
