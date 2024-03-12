import React from 'react';
import Timeline from './components/timeline';

function AddAccomodation() {
  return (
    <div className='p-8'>
        <div className='flex justify-end'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <div className='p-3'>
        <Timeline timePoints={['basicInfo','describe','Publish']}/>
        </div>        
    </div>
  );
}

export default AddAccomodation;