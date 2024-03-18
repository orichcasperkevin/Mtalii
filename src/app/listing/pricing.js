import React, { useState,useEffect } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import GuestInput from '../components/search_filters/guests';
import OutsideClickHandler from '../components/outside_click';

export default function Pricing(){
  const [showLocations, setShowLocations] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');
  const [dates, setDates] = useState({ 
    startDate: null, 
    endDate: null 
  }); 
  const [isGuestInputFocused, setIsGuestInputFocused] = useState(false);
  const [guestInput,setGuestInput] = useState({})
  const [guestInputDisplay,setGuestInputDisplay] = useState('')
  
  // Dummy list of locations for demonstration
  const allLocations = [
      'New York',
      'Los Angeles',
      'Chicago',
      'Houston',
      'Phoenix',
      'Philadelphia',
      'San Antonio',
      'San Diego',
      'Dallas',
      'San Jose',
    ];
  
  // Filter locations based on search query
  const filteredLocations = allLocations.filter(location =>
    location.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const handleInputChange = event => {
    setLocationSearch(event.target.value);
    let searchValue = event.target.value
    setShowLocations(searchValue.trim() !== '');
  };

  const handleLocationClick = location => {
    // Do something with the selected location, e.g., set it in state or perform an action
    setLocationSearch(location)
    setShowLocations(false); // Hide locations dropdown after selection
  };

  const handleDatesChange = (newValue) => {    
    setDates(newValue); 
  } 

  // guest input
  const handleGuestInputFocus = () => {
    setIsGuestInputFocused(true);
  };

  const handleOutsideGuestComponentClick = () => {
    setIsGuestInputFocused(false);
  };

  const handleGuestValueChange = (newValue) => {
    setGuestInput(newValue)
  };

  useEffect(()=>{
      let formattedString = '';
      for (const key in guestInput) {
        if (guestInput[key] > 0) {
          formattedString += `${guestInput[key]} ${key}, `;
        }
      }
      // Remove trailing comma and space
      formattedString = formattedString.replace(/, $/, '');
      setGuestInputDisplay(formattedString)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[guestInput,])

  return (
      <div className="flex flex-col items-start border p-5 rounded rounded-lg w-3/4 shadow-md">
        <div className='py-5'>
            <span className='text-xl font-bold '>$25/night</span>
        </div>
        <div className="grid min-h-[100px] w-full place-items-start overflow-x-scroll rounded-lg lg:overflow-visible">
            <div className="flex w-full grid">
            {/* Dates */}
            <div
                className="border grid font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 focus:shadow-none active:opacity-[0.85] w-full rounded-full"
                type="button">
                Dates
                <Datepicker 
                inputClassName={"border-none text-gray-500 p-1 focus:ring-0"}
                primaryColor={"yellow"} 
                value={dates} 
                onChange={handleDatesChange} 
                showShortcuts={true} 
                placeholder='When ?'
                /> 
            </div>      
            {/* Guests     */}
            <div className="mt-3 relative flex flex-row border font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 focus:shadow-none active:opacity-[0.85] w-full rounded-full"
                type="button">
                <div className='grid'>
                Guests
                <input type="text" className='p-1 text-gray-500' placeholder="Who's coming?"
                    value={guestInputDisplay}
                    onFocus={handleGuestInputFocus} >                
                </input>              
                { isGuestInputFocused ?              
                <div className="absolute right-0 top-20 z-20 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <OutsideClickHandler onOutsideClick={handleOutsideGuestComponentClick}>
                    <GuestInput onValueChange={handleGuestValueChange}/>
                    </OutsideClickHandler>                
                </div>
                : null }
                </div>                              
            </div>          
            </div>
        </div>
        <div className='w-full justify-center p-3 border rounded-lg mt-3'>
            <div className="">
                <h2 className="mb-4">Price Details</h2>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Nightly Rate (x5 nights)</span>
                    <span className="text-gray-700">$45 X 5 nights</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="text-gray-700">$225</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Cleaning Fee</span>
                    <span className="text-gray-700">$15</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Ziara Service Fee</span>
                    <span className="text-gray-700">$65</span>
                </div>
                <hr className='py-3'></hr>
                <div className="flex justify-between">
                    <span className="text-lg font-bold">Total (USD)</span>
                    <span className="text-lg font-bold">$305</span>
                </div>
            </div>
        </div>
        <div className='py-5 flex w-full justify-center '>
            <button className='border rounded-full p-3 w-full bg-secondary-1 text-white'>
                Reserve
            </button>
        </div>
      </div>
    )
}