'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import ProfileIcon from '../components/profile_icon';
import Accomodations from './accomodation';
import Activities from './Activities';
import GroundTransfers from './transfer';
import Image from 'next/image';
function ClickCounter() {
    const [activeTab, setActiveTab] = useState('Accomodations');

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
  };

  return (
    <section>
        <nav>
            <div className="p-3 flex justify-between bg-gray-200">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="ZZ logo"            
                        width={50}
                        height={50}
                        priority
                        className='cursor-pointer'                
                    />
                    </Link>                        
                        <nav className="space-x-4 p-3 ml-3">            
                        <a className="text-gray-700 hover:text-gray-900" href="#">Ziara service provider</a>                               
                        </nav>              
                </div>        
                <div className='space-x-4'>            
                {/* Profile Icon */}        
                <ProfileIcon/>
                </div>      
            </div> 
        </nav>
        <div className='container  mx-auto mt-3'>
            <nav className="flex justify-center space-x-4 p-3 ml-3">            
                <a className={`cursor-pointer ${activeTab === 'Accomodations' ? 'font-bold' : 'text-gray-700 hover:text-gray-900'}`} 
                onClick={() => handleTabClick('Accomodations')}>
                    Accomodations <span>(24)</span>
                </a>            
                  <span>&#x2022;</span>
                <a className={`cursor-pointer ${activeTab === 'Activities' ? 'font-bold' : 'text-gray-700 hover:text-gray-900'}`}
                onClick={() => handleTabClick('Activities')}>
                    Activities <span>(0)</span>
                </a>                    
                  <span>&#x2022;</span>
                <a className={`cursor-pointer ${activeTab === 'Transfers' ? 'font-bold' : 'text-gray-700 hover:text-gray-900'}`}
                onClick={() => handleTabClick('Transfers')}>
                    Ground transfers <span>(0)</span>
                </a>                               
            </nav>  
            <div className='p-3'>
                {/* Render content based on active tab */}
                {activeTab === 'Accomodations' && <Accomodations />}
                {activeTab === 'Activities' && <Activities />}
                {activeTab === 'Transfers' && <GroundTransfers />}
            </div>

        </div>
    </section>
  );
}

export default ClickCounter;
