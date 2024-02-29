export default function Search(){
    return (
      <div class="flex items-center">
        <div class="grid min-h-[100px] w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
        <div class="flex w-full divide-x  row">
          <div
            class="border font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] block w-full rounded-r-none border-r-0"
            type="button">
            Location  
            <input type="text" placeholder="Where to?"></input>
          </div>
          <div
            class="border font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] block w-full rounded-r-none border-r-0"
            type="button">
            Dates
            <input type="text" placeholder="When ?"></input>
          </div>
          <div
            class="border font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 shadow-md shadow-gray-900/10 focus:shadow-none active:opacity-[0.85] block w-full rounded-r-none border-r-0"
            type="button">
            Guests
            <input type="text" placeholder="Who's coming?"></input>
          </div>
          <button
            class="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 text-white rounded-full bg-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full rounded-l-none"
            type="button">
            Search
          </button>
        </div>
      </div>
      </div>
    )
}