"use client"
import React,{useState} from 'react';
import Link from 'next/link'
import Image from "next/image";
import ProfileIcon from '../components/profile_icon';
import NavScrollBehavior from '../components/nav_scroll_behavior';
import Modal from '../components/modal';
import Login from '../components/login';
import Signup from '../components/signup';




export default function Home() {  
  const [showNav,setShowNav] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  const [showSignUp,setShowSignup] = useState(false)
  const onShowNav=(value)=>{
    setShowNav(value)
  }

  const onShowLogin=()=>{    
    setShowLogin(true)
  }
  const onShowSignup=()=>{
    setShowSignup(true)
  }


  return (
    <main>  
      <NavScrollBehavior onShowNav={onShowNav}>   
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
                <nav className="space-x-4 p-3 ml-3">            
                  <Link className="text-gray-700 hover:text-gray-900" href="/">Explore Destinations</Link>            
                  <a className="text-gray-700 font-bold hover:text-gray-900" href="#">Itenary</a>  
                  <a className="text-gray-700 hover:text-gray-900" href="#">Bookings</a>  
                </nav>              
            </div>        
            <div className='space-x-4'>
              <Link href="/services" className="text-gray-600">Switch to services</Link>
              {/* Profile Icon */}        
              <ProfileIcon onShowLogin={onShowLogin} onShowSignup={onShowSignup}/>
            </div>      
          </div>                
          <hr></hr>
        </div>
      </NavScrollBehavior> 
      {/* spacer */}
      <div className='mt-20'></div>  

      {/* Itenary */}
      <section>
      <section class="">
	<div class="container max-w-5xl px-4 py-12 mx-auto">
		<div class="grid gap-4 mx-4 sm:grid-cols-12">
			<div class="col-span-12 sm:col-span-3">
				<div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-accent-1">
					<h3 class="text-3xl font-semibold">Easter vacation</h3>
					<span class="text-sm font-bold tracking-wider uppercase dark:text-gray-400">19-20th April</span>
                    <p>$789</p>
				</div>
			</div>
			<div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
					<div class="border p-3 rounded-lg flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-accent-1">
                        <time class="text-xs tracking-wide uppercase dark:text-gray-400">April 19, 8am</time>
						<h3 class="text-xl font-semibold tracking-wide">Qatar airways flight</h3>	
                            <img alt="Qatar Airways" className="w-10 h-10" src="data:image/png;base64,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" />
                        <div className='flex space-x-3'>
                            <p class="mt-3">Departure: 8:00am</p>
                            <p class="mt-3">Arrival: 9:00am</p>
                        </div>		
                        <div className='flex space-x-3'>
                            <p class="mt-3">Price: $900</p>                        
                        </div>				
					</div>
					<div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-accent-1">
                        <div class="border p-3 rounded-lg flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-accent-1">
                            <time class="text-xs tracking-wide uppercase dark:text-gray-400">April 19, 11am</time>
                            <h3 class="text-xl font-semibold tracking-wide">Suzuki vitara ground transfer</h3>	
                            <Image className="rounded-lg" src="https://picsum.photos/id/45/300/200" width={100} height={100}/>
                            <div className='flex space-x-3'>
                                <p class="mt-3">Departure: 11:00am</p>
                                <p class="mt-3">Arrival: 12:00am</p>
                            </div>		
                            <div className='flex space-x-3'>
                                <p class="mt-3">Price: $12</p>                        
                            </div>				
                        </div>
					</div>
					<div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-accent-1">
                        <div class="border p-3 rounded-lg flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-accent-1">
                            <time class="text-xs tracking-wide uppercase dark:text-gray-400">April 19, 12am</time>
                            <h3 class="text-xl font-semibold tracking-wide">Forest hill resort stay</h3>	
                            <Image className="rounded-lg" src="https://picsum.photos/id/98/300/200" width={100} height={100}/>
                            <div className='flex space-x-3'>
                                <p class="mt-3">Start: April 12, 1pm</p>
                                <p class="mt-3">End: April 20, 8am</p>
                            </div>		
                            <div className='flex space-x-3'>
                                <p class="mt-3">Price: $450</p>                        
                            </div>				
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
      </section>


      {/* Modal */}
      <section>
        <Modal isOpen={showLogin} onClose={()=>{setShowLogin(false)}} title="Login">
            <Login/>
        </Modal>
        <Modal isOpen={showSignUp} onClose={()=>setShowSignup(false)} title="Sign Up">
          <Signup/>
        </Modal>
      </section>
    </main>

  );
}
