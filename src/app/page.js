"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import ProfileIcon from "./components/profile_icon";
import Search from "./components/search";
import MiniSearch from './components/search_minimized';
import SearchFilters from "./components/search_filters/search_filters";
import CategoryFilter from './components/category_filter';
import NavScrollBehavior from './components/nav_scroll_behavior';
import Modal from './components/modal';
import Login from './components/login';


export default function Home() {
  const router = useRouter();
  const [showFilters,setShowFilters] = useState(false) 
  const [showNav,setShowNav] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  const [showSignUp,setShowSignup] = useState(false)
  const [searchData,setSearchData] = useState({
    location:"Anywhere", 
    guests:{}, 
    dates:{ 
      startDate: null, 
      endDate: null 
    } 
  })
  const cardItems = [
    {
        id: 1,
        imageSrc: 'https://picsum.photos/seed/59/300/200',       
        title: 'Mountain pass',
        channelName: 'awesome cabin within the mountains of south Nairobi',
        price: '$241 / night',
    },
    {
        id: 2,
        imageSrc: 'https://picsum.photos/seed/60/300/200',        
        title: 'Forest hill resort',
        channelName: 'Candid resort in the depths of resjru forest',
        price: '$230 / night',
    },
    {
        id: 3,
        imageSrc: 'https://picsum.photos/seed/22/300/200',       
        title: 'City stay',
        channelName: 'Experience the heartbeat of the city.',
        price: '$877 / experience',
    },
    {
        id: 4,
        imageSrc: 'https://picsum.photos/seed/90/300/200',        
        title: 'City by the hiil',
        channelName: 'Enjoy scenic views in the world famous Loutun city.',
        price: '$47 ? experience',
    },
    {
      id: 1,
      imageSrc: 'https://picsum.photos/seed/59/300/200',       
      title: 'Mountain pass 2',
      channelName: 'awesome cabin within the mountains of south Nairobi',
      price: '$241 / night',
  },
  {
      id: 2,
      imageSrc: 'https://picsum.photos/seed/60/300/200',        
      title: 'Forest hill resort new',
      channelName: 'Candid resort in the depths of resjru forest',
      price: '$230 / night',
  },
  {
      id: 3,
      imageSrc: 'https://picsum.photos/seed/22/300/200',       
      title: 'City stay',
      channelName: 'Experience the heartbeat of the city.',
      price: '$877 / experience',
  },
  {
      id: 4,
      imageSrc: 'https://picsum.photos/seed/90/300/200',        
      title: 'City by the hiil',
      channelName: 'Enjoy scenic views in the world famous Loutun city.',
      price: '$47 ? experience',
  },
  {
    id: 2,
    imageSrc: 'https://picsum.photos/seed/60/300/200',        
    title: 'Forest hill resort',
    channelName: 'Candid resort in the depths of resjru forest',
    price: '$230 / night',
},
{
    id: 3,
    imageSrc: 'https://picsum.photos/seed/22/300/200',       
    title: 'City stay',
    channelName: 'Experience the heartbeat of the city.',
    price: '$877 / experience',
},
{
    id: 4,
    imageSrc: 'https://picsum.photos/seed/90/300/200',        
    title: 'City by the hiil',
    channelName: 'Enjoy scenic views in the world famous Loutun city.',
    price: '$47 ? experience',
},
{
  id: 1,
  imageSrc: 'https://picsum.photos/seed/59/300/200',       
  title: 'Mountain pass',
  channelName: 'awesome cabin within the mountains of south Nairobi',
  price: '$241 / night',
},
{
  id: 2,
  imageSrc: 'https://picsum.photos/seed/60/300/200',        
  title: 'Forest hill resort',
  channelName: 'Candid resort in the depths of resjru forest',
  price: '$230 / night',
},

  ];

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
                  <a className="text-gray-700 font-bold hover:text-gray-900" href="#">Explore Destinations</a>            
                  <a className="text-gray-700 hover:text-gray-900" href="#">Itenary</a>  
                  <a className="text-gray-700 hover:text-gray-900" href="#">Bookings</a>  
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
            <CategoryFilter/>                   
          </div>
          <hr></hr>
        </div>
      </NavScrollBehavior> 
      {/* spacer */}
      <div className='mt-80'></div>                                     
      <section className="mt-3 flex flex-row justify-center">
        <div className="grid grid-cols-12 gap-2 gap-y-6 max-w-6xl">
          {cardItems.map((item) => (
              <div key={item.id} className="col-span-12 sm:col-span-6 md:col-span-3">
                <card className="w-full flex flex-col" 
                  onClick={()=>{router.push(`/listing/${item.title}`)}}>
                    <div>
                        {/* Image Video */}
                        <a href="#">
                            <img src={item.imageSrc} className="w-96 h-auto rounded-lg" alt="Video thumbnail" />
                        </a>                      
                    </div>
                    <div className="flex flex-row mt-2 gap-2">                      
                      
                        {/* Description */}
                        <div className="flex flex-col">
                            <div className='flex flex-row justify-between'>
                              <a href="#" className='flex flex-row justify-between'>
                                  <p className="text-gray-500 text-sm font-semibold">{item.title}</p>                             
                              </a>
                              <span className='flex flex-row text-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <p>4.5</p>
                              </span>
                            </div>                          
                            <a className="text-gray-400 text-xs mt-2 hover:text-gray-100 text-ellipsis overflow-hidden" href="#">
                                {item.channelName}
                            </a>
                            <p className="text-gray-400 text-xs mt-1">{item.price}</p>
                        </div>
                    </div>
                </card>
              </div>      
          ))}
        </div>     
      </section>
      {/* Modal */}
      <section>
        <Modal isOpen={showLogin} onClose={()=>{setShowLogin(false)}} title="Login">
            <Login/>
        </Modal>
        <Modal isOpen={showSignUp} onClose={()=>setShowSignup(false)} title="Sign Up">
          Sign Up
        </Modal>
      </section>
    </main>

  );
}
