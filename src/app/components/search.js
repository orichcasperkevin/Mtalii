import React, { useState,useEffect } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import GuestInput from './search_filters/guests';
import OutsideClickHandler from './outside_click';

export default function Search({onData}){
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
  },[guestInput,])

  //emit to parent whwen data changes
  useEffect(()=>{
    onData({
      "location":locationSearch,
      "guests":guestInput,
      "dates":dates
    }
    )
  },[dates,guestInput,locationSearch])
  return (
      <div class="flex items-center">
        <div class="grid min-h-[100px] w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
        <div class="flex w-full divide-x  row">
          {/* location */}
          <div
            class="border relative grid font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] block w-full rounded-r-none border-r-0"
            type="button">
            Location  
              <input className="p-1 border-none text-gray-500" type="text" placeholder="Where to?"
              value={locationSearch}
              onChange={handleInputChange}>              
              </input>
              {showLocations &&  (
              <div className="absolute right-0 top-20 z-20 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <ul className="p-3">
                  {filteredLocations.map((location, index) => (
                    <li className="text-gray-900 rounded-full p-3 hover:bg-accent-1"
                      key={index} onClick={() => handleLocationClick(location)}>
                        {location}
                    </li>                
                  ))}
                  </ul>
              </div>
              )}
          </div>
          {/* Dates */}
          <div
            class="border grid font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] block w-full rounded-r-none border-r-0"
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
          <div class="relative flex flex-row border font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] w-full rounded-full rounded-l-none border-r-0"
            type="button">
            <div>
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
            <button className="ml-2 bg-accent-1 rounded-full p-2">                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>       
          </div>          
        </div>
      </div>
      </div>
    )
}