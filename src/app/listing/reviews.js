import React from "react";
export default function Reviews(){
return<>
<div className="overflow-x-auto whitespace-nowrap">
  <div className="flex space-x-4 p-4">
    {/* <!-- Review Card 1 --> */}
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden text-wrap">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <div className="text-gray-900 font-bold">Loyve</div>
            <div className="text-gray-600 text-sm">3 years ago</div>
          </div>
        </div>
        <p className="text-gray-700">A beautiful space. We really enjoyed our stay and we would definitely come back! Although a water dispenser would be nice</p>
      </div>
    </div>

    {/* <!-- Review Card 2 --> */}
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden text-wrap">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <div className="text-gray-900 font-bold">Loyve</div>
            <div className="text-gray-600 text-sm">3 years ago</div>
          </div>
        </div>
        <p className="text-gray-700">A beautiful space. We really enjoyed our stay and we would definitely come back! Although a water dispenser would be nice</p>
      </div>
    </div>

    {/* <!-- Review Card 3 --> */}
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden text-wrap">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <div className="text-gray-900 font-bold">Loyve</div>
            <div className="text-gray-600 text-sm">3 years ago</div>
          </div>
        </div>
        <p className="text-gray-700">A beautiful space. We really enjoyed our stay and we would definitely come back! Although a water dispenser would be nice</p>
      </div>
    </div>

    {/* <!-- Add more review cards here if needed --> */}

  </div>
</div>

</>
}