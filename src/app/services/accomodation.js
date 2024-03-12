import React from 'react';
import Link from 'next/link'
import AccomodationFilters from './components/accomodation_filters';

function Accomodations() {
  return (
    <div>
        <div className='p-3 flex justify-end'>
          <Link href="/services/addAccomodation" className='bg-secondary-1 text-white rounded-full p-3 '>+ Add accomodation</Link>
        </div>
        <div>      
        </div>
        <AccomodationFilters/>        
    </div>
  );
}

export default Accomodations;