'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '../components/spinner';

function PasswordReset() {
    const [email,setEmail] = useState(null);
    const [sendingEmail,setSendingEmail] = useState(false);
    const [successMessage,setSuccessMessage] = useState(null);
    const [errorData,setErrorData] = useState(null);
    const router = useRouter();
    const goBack = () => {
        router.back();
    };

    const sendVerificationEmail= async ()=>{
        setSendingEmail(true);
        try {
            const response = await fetch('http://5.189.189.26:31517/api/auth/password/reset/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ 
                'email':email,                 
              })
            });
      
            if (response.ok) {
                // email sent
                const data = await response.json();                
                console.log(data)
                setSuccessMessage(data.detail)
                // Do something wr state
                setSendingEmail(false)      
                // setTimeout(()=>{
                //     // got to reset 
                // },1000)                    
                        
            } else {
                // Login failed
                const errorData = await response.json();  
                console.debug(errorData)
                setErrorData("An error occured when trying to send email. Please try again");                       
                setSendingEmail(false);
                // Handle the error, show error message to the user, etc.
            }
          } catch (error) {
            console.error('Error occurred while logging in:', error);
            setLoggingIn(false)
          }
    }
    

    return (
    <div className='p-8'>
        <div className='flex justify-end'>
          <button onClick={goBack}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>           
        {/* Content   */}    
        <hr className='mt-10'/>
        <div className='p-5 flex justify-center font-bold'>            
            <h3 className="block text-gray-700 text-sm  mb-2" htmlFor="email">
                Forgot password
            </h3>            
        </div>
        {errorData ?
        <div className='p-2 flex justify-center'>
            <small className='text-red-600'>{errorData}</small>
        </div>
        :null
        }
        {successMessage ?
        <div className='p-2 flex justify-center'>
            <small className='text-green-600'>{successMessage}</small>
        </div>
        : null            
        }
        <div className='flex justify-center items-center h-full mt-10'>           
            <div className="mb-6">
            <label className="block text-gray-700 text-sm  mb-2" htmlFor="email">
                Email
            </label>            
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <small>You will get a verification code through this email</small>
            </div>
        </div>     
        <div className='flex justify-center'>
            <button
            className="bg-secondary-1 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
            onClick={sendVerificationEmail}>
            <span className="flex">
                <span className="mr-2">Send verification email</span>
                {sendingEmail ?
                <Spinner/>
                :
                null
                }
            </span>
            </button>
        </div>   
    </div>
  );
}

export default PasswordReset;