import React from "react";

const ComingSoon = ({title}) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title} Coming Soon</h1>
        <p className="text-gray-600">Stay tuned for updates!</p>
      </div>
    </div>
  );
};

export default ComingSoon;
