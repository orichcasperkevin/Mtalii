export default function Search(){
    return (
<div class="flex items-center space-x-4">
  <div class="flex flex-grow p-4 space-x-2 border-2 rounded-full">
    {/* <!-- Location --> */}
    <div class="flex-grow border rounded-md">
      <div class="flex items-center">
        <svg class="w-6 h-6 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C7.581 2 4 5.581 4 10c0 2.58 1.208 5.558 3.224 8.283.832 1.07 1.76 1.98 2.608 2.684.828-.714 1.74-1.617 2.594-2.676C16.792 15.561 18 12.58 18 10c0-4.419-3.581-8-8-8z"></path>
        </svg>
        <input type="text" placeholder="Location" class="w-full px-2 py-1 focus:outline-none"></input>
      </div>
    </div>
    
    {/* <!-- Check-in Date --> */}
    <div class="flex-grow border rounded-md">
      <div class="flex items-center">
        <svg class="w-6 h-6 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        <input type="date" placeholder="Check-in" class="w-full px-2 py-1 focus:outline-none"></input>
      </div>
    </div>
    
    {/* <!-- Checkout Date --> */}
    <div class="flex-grow border rounded-md">
      <div class="flex items-center">
        <svg class="w-6 h-6 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        <input type="date" placeholder="Check-out" class="w-full px-2 py-1 focus:outline-none"></input>
      </div>
    </div>
    
    {/* <!-- Guest Field --> */}
    <div class="flex-grow border rounded-md">
      <div class="flex items-center">
        <svg class="w-6 h-6 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
        </svg>
        <input type="text" placeholder="Guests" class="w-full px-2 py-1 focus:outline-none"></input>
      </div>
    </div>

    {/* <!-- Search Button --> */}
    <button class="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m-.61-6.49C16.54 9.19 15.3 8 13.65 8c-1.82 0-3.29 1.4-3.29 3.13 0 1.73 1.47 3.14 3.29 3.14 1.26 0 2.27-.68 2.85-1.6m-.01-6.65a8.003 8.003 0 1 0-2.94 15.46 7.5 7.5 0 0 0 5.65-2.55 7.9 7.9 0 0 0 1.18-4.36"></path>
        </svg>
    </button>


  </div>
  
</div>


    )
}