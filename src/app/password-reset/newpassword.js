'use client'
import React, { useState } from 'react';
import Spinner from '../components/spinner';

function NewPassword() {
    const [password,setPassword] = useState(null);
    const [passwordConfirm,setPasswordConfirm] = useState(null);
    const [resettingPassword,setResettingPassword] = useState(false)
    const [successMessage,setSuccessMessage] = useState(null);
    const [errorData,setErrorData] = useState(null);    

    const resetPassword= async ()=>{
        setResettingPassword(true);
        if (password !== passwordConfirm){
            setErrorData("confirmation did not match password")
            setResettingPassword(false)
            return
        }
        try {
            const response = await fetch('http://5.189.189.26:31517/api/auth/reset/confirm/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ 
                "new_password1": password,
                "new_password2": password                
              })
            });
      
            if (response.ok) {
                // email sent
                const data = await response.json();                
                console.log(data)
                setSuccessMessage(data.detail)
                // Do something wr state
                SetResettingPassword(false)      
                // setTimeout(()=>{
                //     // got to reset 
                // },1000)                    
                        
            } else {
                // Login failed
                const errorData = await response.json();  
                console.debug(errorData)
                setErrorData("An error occured when trying to send email. Please try again");                       
                SetResettingPassword(false);
                // Handle the error, show error message to the user, etc.
            }
          } catch (error) {
            console.error('Error occurred while logging in:', error);
            setLoggingIn(false)
          }
    }
    

    return (
    <div className='p-8'>  
        <hr className='mt-10'/>
        <div className='p-5 flex justify-center font-bold'>            
            <h3 className="block text-gray-700 text-sm  mb-2" htmlFor="email">
                New password
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
        <div className='flex flex-col justify-center items-center h-full mt-10'>           
            <div className="mb-6">
            <label className="block text-gray-700 text-sm  mb-2" htmlFor="email">
                New Password
            </label>            
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"                
                id="password"
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />            
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm  mb-2" htmlFor="email">
                Confirm password
            </label>            
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder=""
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />            
            </div>
        </div>     
        <div className='flex justify-center'>
            <button
            className="bg-secondary-1 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
            onClick={resetPassword}>
            <span className="flex">
                <span className="mr-2">Reset your password</span>
                {resettingPassword ?
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

export default NewPassword;