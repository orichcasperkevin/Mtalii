import React from "react"
import Image from "next/image"
export default function Listing({ params }) {
    return <>
        <section className="">
            <div className="container mx-auto px-2 py-4">
                <h1 className="text-4xl font-bold">{params.slug}</h1>
            </div>            
            <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                            <Image src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill={true} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>                                                    
                        </a>
                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                            <Image  src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill={true} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />                                                      
                        </a>
                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <Image src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill={true} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />                                                             
                            </a>
                            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <Image src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill={true} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />                                                              
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                            <Image src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill={true} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />                                                      
                        </a>
                    </div>
                </div>
            </div>            
        </section>
        <section className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About this Place</h2>
                    <p className="text-lg text-gray-600 mb-6">Step into your oceanfront oasis, where the rhythm of the waves sets the tempo for your stay. With unparalleled views of the endless horizon from both bedrooms, each moment in our coastal retreat is a masterpiece framed by the sea. Wake up to the soft glow of sunrise painting the water in hues of gold, and unwind to the symphony of waves lulling you to sleep. Whether youre seeking romance or rejuvenation, our home offers the perfect blend of serenity and luxury. Come, let the ocean be your muse and our haven be your sanctuary.</p>
                </div>
                <div>
                    <ul className="text-lg text-gray-600 mb-6">
                    <li className="flex items-center mb-4">
                        <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        On Premises Parking
                    </li>
                    <li className="flex items-center mb-4">
                        <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        EnSuite
                    </li>
                    <li className="flex items-center mb-4">
                        <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        Stable Internet
                    </li>
                    <li className="flex items-center mb-4">
                        <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        Kitchen
                    </li>
                    <li className="flex items-center mb-4">
                        <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        Security
                    </li>
                    <li className="flex items-center mb-4">
                        <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        Pet Friendly
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    </>
  }