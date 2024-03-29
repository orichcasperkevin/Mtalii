'use client'
import React, { useState } from 'react';
import Timeline from './components/timeline';
import BasicInfo from './components/basicInfo';
import Amenities from './components/amenities';
import AddPhotos from './components/photos';
import Pricing from './components/pricing';
import Link from 'next/link';

const BASIC_INFO_TAB = "basic info"
const AMENITIES_TAB = "amenities"
const PHOTOS_TAB = "photos"
const PRICING_TAB = "finish"

function AddAccomodation() {
  const [activeTab,setActiveTab] = useState(BASIC_INFO_TAB)
  const tabsArray = [BASIC_INFO_TAB,AMENITIES_TAB,PHOTOS_TAB,PRICING_TAB]


  const onUpdateProgress=(newValue)=>{
    setActiveTab(newValue)
  }
  return (
    <div className='p-8'>
        <div className='flex justify-end'>
          <Link href="/services?tab=transfers"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </Link>
        </div>
        <div className='flex justify-center'>
          <div className='p-3 w-96'>
            <Timeline className=""              
              timePoints={tabsArray}
              onUpdateProgress={onUpdateProgress}              
            />            
          </div> 
        </div>     
        {/* Content   */}    
        <hr className='mt-10'/>
        <div>
          {/* Render content based on active tab */}
          {activeTab === BASIC_INFO_TAB && <BasicInfo/>}
          {activeTab === AMENITIES_TAB && <Amenities/>}
          {activeTab === PHOTOS_TAB && <AddPhotos />}
          {activeTab === PRICING_TAB && <Pricing />}
        </div>        
    </div>
  );
}

export default AddAccomodation;