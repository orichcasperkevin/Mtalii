"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from "next/image";
import Cookies from 'js-cookie';
import ProfileIcon from '../components/profile_icon';
import NavScrollBehavior from '../components/nav_scroll_behavior';
import { useRouter } from 'next/navigation';

export default function Home() {  
  const router = useRouter()
  const onShowLogin=()=>{
    router.push("/login")
  }
  const onShowSignup=()=>{
    router.push("/signup")
  }
  const getUserProfile= async ()=>{
    try {
      const response = await fetch('https://api.ziarra.world/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          'username':email, 
          'password': password 
        })
      });

      if (response.ok) {
          // Login successful
          const data = await response.json();
          // Do something with the response data, like storing tokens in local storage or state
          setLoggingIn(false)
          setLoginSuccesfull(true)
          console.log('Login successful:', data.key);
          Cookies.set('token', data.key, { httpOnly: true });
          setTimeout(()=>{
            onLoggedIn()
          },[1300])         
                  
      } else {
          // Login failed
          const errorData = await response.json();          
          setErrorData(errorData.non_field_errors[0])
          setLoggingIn(false)
          // Handle the error, show error message to the user, etc.
      }
    } catch (error) {
      console.error('Error occurred while logging in:', error);
      setLoggingIn(false)
    }
  }
  useEffect(()=>{
    const token = Cookies.get('token');
    console.log('Cookie Value:', token);

  },[])
  return (
    <main>  
      <NavScrollBehavior onShowNav={()=>{;}}>   
        <div className='bg-white'>
          <div className="p-3 flex justify-between bg-gray-200">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="ZZ logo"            
                width={50}
                height={50}
                priority
              />                                                     
            </div>        
            <div className='space-x-4'>
              <Link href="/services" className="text-gray-600">Switch to services</Link>
              {/* Profile Icon */}        
              <ProfileIcon onShowLogin={onShowLogin} onShowSignup={onShowSignup}/>
            </div>      
          </div>      
          {/* Search */}      
          <hr></hr>
        </div>
      </NavScrollBehavior> 
      {/* spacer */}
      <div className='mt-20'></div>  

      <section>
        <div className='flex justify-center p-5'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    User Profile
                </h3>                
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            John Doe
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            johndoe@example.com
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Phone number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            (123) 456-7890
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            123 Main St<br></br>
                            Anytown, USA 12345
                        </dd>
                    </div>
                </dl>
            </div>
          </div>           
        </div>        
      </section>
    </main>

  );
}
