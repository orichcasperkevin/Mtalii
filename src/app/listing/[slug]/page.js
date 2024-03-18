"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Pricing from "../pricing"
import Reviews from "../reviews"

export default function Listing({ params }) {
    return <>
        <section className="">
        <div className='flex justify-start px-10'>
            <Link href="/?tab=activities" className="z-50 p-2 flex border rounded-full hover:bg-gray-200">                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                <span className="ml-2">Back home</span>
            </Link>
            </div>
            <div className="container mx-auto px-2 py-4">
                <h1 className="text-4xl font-bold">{params.slug.replace(/%20/g, " ")}</h1>
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
                <div className="p-3">
                    <span>2 beds</span>
                    <span className="p-2">&#x2022;</span>
                    <span>2 births</span>
                    <span className="p-2">&#x2022;</span>
                    <span>Dedicated bathrooms</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>                        
                        <h2 className="mt-3 text-xl font-bold text-gray-800 mb-4">About this Place</h2>
                        <p className="text-lg text-gray-600 mb-6">Step into your oceanfront oasis, where the rhythm of the waves sets the tempo for your stay. With unparalleled views of the endless horizon from both bedrooms, each moment in our coastal retreat is a masterpiece framed by the sea. Wake up to the soft glow of sunrise painting the water in hues of gold, and unwind to the symphony of waves lulling you to sleep. Whether youre seeking romance or rejuvenation, our home offers the perfect blend of serenity and luxury. Come, let the ocean be your muse and our haven be your sanctuary.</p>
                        <div>
                            <div className="py-5 text-xl font-bold">
                                <span>What you get</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">                            
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14.828V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v9.828a4 4 0 0 0-1 2.828V21h2c1.657 0 3 1.343 3 3h6c0-1.657 1.343-3 3-3h2v-3.344a4 4 0 0 0-1-2.828z"/>
                                </svg>
                                On premises Parking
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                EnSuite
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18l-2 2-2-2"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 14V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11"/>
                                </svg>
                                Stable Internet
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                                </svg>
                                Kitchen
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7l-4-4-4 4m4-4v18"/>
                                </svg>
                                Security
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21v-8a5 5 0 0 1 10 0v8"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                Pet friendly
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Pricing className="fixed top-0"/>
                    </div>
                </div>
            </div>
            <hr className="mt-5"></hr>
            <div className="flex flex-col justify-center">
                <div className="p-5 text-xl font-bold">
                    4.5 stars from 230 reviews
                </div>
                <Reviews/>
            </div>
        </section>
    </>
  }