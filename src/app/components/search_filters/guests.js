import React, { useEffect, useState } from 'react';

const GuestInput = ({onValueChange}) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);

    const handleIncrement = (setter) => {
        setter((prevCount) => prevCount + 1);
    };

    const handleDecrement = (setter) => {
        setter((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    useEffect(()=>{
        onValueChange(
            {
                'adults':adults,
                'children':children,
                'infants':infants,
                'pets':pets
            }
        )
    },[adults,children,infants,pets])
    return (
        <div className="p-3 flex flex-col space-y-4">
            <div className="flex justify-between">
                <span className="p-2">Adults:</span>
                <div>
                    <button onClick={() => handleDecrement(setAdults)}  className="bg-accent-1 p-2 rounded-full">
                        -
                    </button>
                    <input type="number" className="input-field w-12 text-center" value={adults} readOnly />
                    <button onClick={() => handleIncrement(setAdults)} className="bg-accent-1 p-2 rounded-full">
                        +
                    </button>
                </div>
            </div>
            <div className="flex justify-between">
                <span className="p-2">Children:</span>
                <div>
                    <button onClick={() => handleDecrement(setChildren)}  className="bg-accent-1 p-2 rounded-full">
                        -
                    </button>
                    <input type="number" className="input-field w-12 text-center" value={children} readOnly />
                    <button onClick={() => handleIncrement(setChildren)}  className="bg-accent-1 p-2 rounded-full">
                        +
                    </button>
                </div>
            </div>
            <div className="flex justify-between">
                <span className="p-2">Infants:</span>
                <div>
                    <button onClick={() => handleDecrement(setInfants)}  className="bg-accent-1 p-2 rounded-full">
                        -
                    </button>
                    <input type="number" className="input-field w-12 text-center" value={infants} readOnly />
                    <button onClick={() => handleIncrement(setInfants)}  className="bg-accent-1 p-2 rounded-full">
                        +
                    </button>
                </div>
            </div>
            <div className="flex justify-between">
                <span className="p-2">Pets:</span>
                <div>
                    <button onClick={() => handleDecrement(setPets)}  className="bg-accent-1 p-2 rounded-full">
                        -
                    </button>
                    <input type="number" className="input-field w-12 text-center" value={pets} readOnly />
                    <button onClick={() => handleIncrement(setPets)}  className="bg-accent-1 p-2 rounded-full">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GuestInput;
