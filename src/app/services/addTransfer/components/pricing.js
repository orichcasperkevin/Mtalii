import React from 'react';

const Pricing = () => {
    return (
        <div className="max-w-md mx-auto p-5">
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700  mb-2">Title For your listing</label>
                <input type="text" id="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 mb-2">Description for your Listing</label>
                <textarea id="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
                <p className="text-gray-600 text-sm mt-1">0/300</p>
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 mb-2">Pricing Per transfer</label>
                <input type="text" id="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="$" />
            </div>
        </div>
    );
};

export default Pricing;
