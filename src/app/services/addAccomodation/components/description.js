import React from "react";

function Description(){
    const amenities = [
        { name: 'Television', icon: 'tv' },
        { name: 'Wifi', icon: 'wifi' },
        { name: 'Free Parking', icon: 'car' },
        { name: 'Paid Parking', icon: 'car' },
        { name: 'Dedicated Workspace', icon: 'briefcase' },                 
    ];
    const kitchenAppliances = [
        { name: 'Microwave', icon: 'microwave' },
        { name: 'Refrigerator', icon: 'fridge' },
        { name: 'Cutlery', icon: 'utensils' },
    ];
    const otherAmenities = [
        { name: 'Pool Table', icon: 'billiards' },
        { name: 'Hot Tub', icon: 'hot-tub' },
        { name: 'Piano', icon: 'music' },
        { name: 'Outdoor showers', icon: 'shower' },
        { name: 'BBQ Grills', icon: 'grill' },
        { name: 'Gym', icon: 'dumbbell' },
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
                <label className="p-3">Kitchen aplliances</label>
                <ul className="mt-3 flex flex-wrap">        
                    {kitchenAppliances.map((appliance, index) => (
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
                <label className="p-3">Other ammenities</label>
                <ul className="mt-3 flex flex-wrap">        
                    {otherAmenities.map((ammenity, index) => (
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
export default Description
