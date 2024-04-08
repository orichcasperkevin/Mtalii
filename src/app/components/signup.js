import React, { useState } from "react";
import Spinner from "./spinner";
const Signup = ({onSignUp}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signingUp,setSigningUp] = useState(false)
  const [errorData,setErrorData] = useState(null)  
  const [signUpSUccessfull,setSignupSuccessfull] = useState(false)


    const handleSignup = async () => {
      // Perform login logic here
      setErrorData(null)    
      setSigningUp(true)
      try {
        const response = await fetch('https://api.ziarra.world/api/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            'username':email, 
            'email':email,
            'password': password,
            "travel_preferences": "None",
            "booking_history": "None"
          })
        });
  
        if (response.ok) {
            // Login successful
            const data = await response.json();
            // Do something with the response data, like storing tokens in local storage or state
            setSigningUp(false)
            setSignupSuccessfull(true)            
            setTimeout(()=>{
              onSignUp()
            },[1300])         
                    
        } else {
            // Login failed
            const errorData = await response.json();          
            setErrorData("Unable to signup")
            setSigningUp(false)
            // Handle the error, show error message to the user, etc.
        }
      } catch (error) {
        console.error('Error occurred while logging in:', error);
        setSigningUp(false)
      }
    };

  return (
    <div className="flex flex-col items-center justify-start h-screen">          
      <div className="bg-white px-8 w-96 mt-8">
        { errorData ?
        <div className="px-2 flex justify-center">
          <small className="text-red-600">Signup failed : {errorData}</small>
        </div>
        :null
         }
        { signUpSUccessfull ?
        <div className="px-2 flex justify-center">
          <small className="text-green-600">Sign up successful</small>
        </div>
        :null
         }
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="**********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>    
      <div>
    <button
        className="bg-secondary-1 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        type="button" onClick={handleSignup}>
        <span className="flex">
          <span className="mr-2">Sign up</span>
              {signingUp ?
                <Spinner/>
                :
                null
              }
          </span>
    </button>
    </div>  
      <div className="mt-4">
        <p className="text-sm">
          Already have an account? <a className="text-blue-500 hover:text-blue-700" href="#">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
