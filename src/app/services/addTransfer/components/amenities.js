import React from "react";

function Amenities(){
    const amenities = [
        { name: 'Leather seats', icon: 'tv' },
        { name: 'Sun roof', icon: 'wifi' },
        { name: 'Stereo', icon: 'car' },
        { name: 'Cup holders', icon: 'car' },
        { name: 'Rear armrest', icon: 'briefcase' },                 
        { name: 'Privacy shades', icon: 'briefcase' },
        { name: 'Ambient lighting', icon: 'tv' },
        { name: 'Massage seats', icon: 'wifi' },
        { name: 'Heated seats', icon: 'car' },
        { name: 'Glove box', icon: 'car' },
        { name: 'Blootooth', icon: 'briefcase' },                 
        { name: 'Mobile connectivity', icon: 'briefcase' },
    ];
    const SafetyItems = [
        { name: 'Collision warning', icon: 'microwave' },
        { name: 'Parking sensors', icon: 'fridge' },
        { name: 'Fire extinguisher', icon: 'utensils' },
        { name: 'Airbags', icon: 'utensils' },
    ];
    const Accessibility = [
        { name: 'Wheelchair access', icon: 'billiards' },
        { name: 'Child seat', icon: 'hot-tub' },
    ]
    return<>
        <div>   
            {/* amenities */}
            <div className="p-3">
                <label className="p-3">What are some of the amenities your Listing has?</label>
                <ul className="mt-3 flex flex-wrap">        
                    {amenities.map((amenity, index) => (
                        <li key={index} className="inline-block p-2">
                        <a href="#" className="inline-block flex flex-row px-4 py-3 rounded-full hover:text-gray-900 bg-gray-200 hover:bg-accent-1">
                        
                            {amenity.name}
                        </a>
                        </li>
                    ))}
                </ul>
            </div> 
            {/* Kitchen */}
            <div className="p-3">
                <label className="p-3">Safety features</label>
                <ul className="mt-3 flex flex-wrap">        
                    {SafetyItems.map((appliance, index) => (
                        <li key={index} className="inline-block p-2">
                        <a href="#" className="inline-block flex flex-row px-4 py-3 rounded-full hover:text-gray-900 bg-gray-200 hover:bg-accent-1">
                        
                            {appliance.name}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>  
            {/* Others */}
            <div className="p-3">
                <label className="p-3">Accesibility</label>
                <ul className="mt-3 flex flex-wrap">        
                    {Accessibility.map((ammenity, index) => (
                        <li key={index} className="inline-block p-2">
                        <a href="#" className="inline-block flex flex-row px-4 py-3 rounded-full hover:text-gray-900 bg-gray-200 hover:bg-accent-1">
                        
                            {ammenity.name}
                        </a>
                        </li>
                    ))}
                </ul>
            </div> 
        </div>
    </>
}
export default Amenities
