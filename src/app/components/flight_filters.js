import React, {useState} from 'react';

const FlightFilters = () => {
    const [showLocations, setShowLocations] = useState(false);
    const [locationSearch, setLocationSearch] = useState('');
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
    return (
    <div className="flex flex-col justify-items-start">     
      <div className="flex overflow-x-scroll hide-scroll-bar">
        <ul className="flex flex-nowrap">         
            <li className="inline-block px-3">                
                <div
                className="border bg-gray-200 relative grid font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full focus:shadow-none active:opacity-[0.85] w-full"
                type="button">                
                <input className="p-1 appearance-none bg-gray-200 focus:outline-none border-none text-gray-800" type="text" placeholder="Where from?"
                value={locationSearch}
                onChange={handleInputChange}>              
                </input>
                {showLocations &&  (
                <div className="absolute right-0 top-full z-50 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
            </li>            
            <li className="inline-block px-3">
                <a href="#" className="inline-block flex flex-row px-4 py-3 rounded-full bg-gray-200 hover:text-gray-900 hover:bg-accent-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                    Business class
                </a>
            </li>
            <li className="inline-block px-3">
                <a href="#" className="inline-block flex flex-row px-4 py-3 rounded-full bg-gray-200 hover:text-gray-900 hover:bg-accent-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                    Economy
                </a>
            </li>       
        </ul>
      </div>
      <style>
        {`
          .hide-scroll-bar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scroll-bar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default FlightFilters;
