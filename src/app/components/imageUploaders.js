import React, { useState } from 'react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  // Function to handle file selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith('image/'));
    if (imageFiles.length > 0) {
      const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...imageUrls]);
    }
  };

  // Function to handle image removal
  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="cursor-pointer bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
      >
        Choose Image(s)
      </label>
      <div className="mt-4 flex space-x-4 overflow-x-scroll w-full max-w-3xl">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative">
            <img src={imageUrl} alt={`Uploaded ${index}`} className="max-w-xs max-h-96" />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
