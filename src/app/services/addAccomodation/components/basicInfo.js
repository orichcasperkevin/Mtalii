import React from "react";
import GoogleMap from '@/app/components/googleMap';

function BasicInfo(){
    return<>
                <div className=''>
            <div className='grid grid-cols-6'>
              {/* Location */}
              <div className='col-start-1 col-span-3 p-3'>
                <div className='grid p-3'>
                  <label>
                    Where is it located ?
                  </label>
                  <input type='text'  className='border border-secondary-1 rounded-lg p-2'></input>
                </div>               
                <div>
                  <GoogleMap/>
                </div>
              </div>
              <div className="col-start-4 col-span-3">
                  {/* Categories    */}
                  <div className='p-4'>
                    <label>Select all categories your listing falls in.</label>
                  </div>                  
                  <div className="flex">
                    <ul className="flex flex-wrap">             
                        <li class="inline-block p-2">
                            <a href="#"  class="inline-block flex flex-row px-4 py-3 rounded-full hover:text-gray-900 bg-gray-200 hover:bg-accent-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                            </svg>
                                Adventure
                            </a>
                        </li>
                        <li class="inline-block p-2">
                            <a href="#" className="inline-block flex flex-row px-4 py-3 rounded-full hover:text-gray-900 bg-gray-200 hover:bg-accent-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg>
                                Family friendly
                            </a>
                        </li>
                        <li class="inline-block p-2">
                            <a href="#" className="inline-block flex flex-row px-4 py-3 rounded-full hover:text-gray-900 bg-gray-200 hover:bg-accent-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>
                                Business travel
                            </a>
                        </li>
                        <li class="inline-block p-2">
                            <a href="#" class="inline-block flex flex-row px-4 py-3 rounded-full hover:text-gray-900 bg-gray-200 hover:bg-accent-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                            </svg>
                                Luxury retreat
                            </a>
                        </li>
                        <li class="inline-block p-2">
                            <a href="#" class="inline-block flex flex-row px-4 py-3 rounded-full hover:text-gray-900 bg-gray-200 hover:bg-accent-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                                Hidden gems
                            </a>
                        </li>
                    </ul>
                  </div>
                  <div className=''>
                      <div class="grid grid-cols-2 gap-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div>
                          <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="activityPriceAdult">
                              Activity Price per Adult
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="activityPriceAdult" type="text" placeholder="Activity Price per Adult"></input>
                          </div>
                          <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="activityPriceChild">
                              Activity Price Per Child
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="activityPriceChild" type="text" placeholder="Activity Price Per Child"></input>
                          </div>
                        </div>
                        <div>
                        <div class="mb-4">
                          <label class="block text-gray-700 text-sm font-bold mb-2" for="openTime">
                            Open Time
                          </label>
                          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="openTime" type="text" placeholder="Open Time"></input>
                        </div>
                        <div class="mb-4">
                          <label class="block text-gray-700 text-sm font-bold mb-2" for="closeTime">
                            Close Time
                          </label>
                          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="closeTime" type="text" placeholder="Close Time"></input>
                        </div>
                        </div>                        
                        <div class="flex items-center justify-between">
                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                          </button>
                        </div>
                      </div>
                  </div>

              </div>              
            </div>
        </div>
    </>
}
export default BasicInfo
