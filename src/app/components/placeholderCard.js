const PlaceholderCard = () => (
    <>
    <div className="col-span-12 sm:col-span-6 md:col-span-3 w-80">        
      <div className="w-full flex flex-col bg-white rounded-lg">      
        <div className="w-full bg-gray-300 h-48 rounded-t-lg ml-3 rounded-lg mt-3 mb-3 ml-3" >                
        </div>
        <div className="flex flex-col p-4">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
          <div className="h-4 bg-gray-300 rounded w-1/3 mt-2" />
        </div>
      </div>
    </div>
    </>
);
export default PlaceholderCard