import React, { useState } from "react";
import Spinner from "./spinner";

const Login = ({onLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn,setLoggingIn] = useState(false)
  const [errorData,setErrorData] = useState(null)  
  const [loginSuccesful,setLoginSuccesfull] = useState(false)

  const handleLogin = async () => {
    // Perform login logic here
    setErrorData(null)    
    setLoggingIn(true)
    try {
      const response = await fetch('http://5.189.189.26:31517/api/auth/login/', {
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
          console.log('Login successful:', data);
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
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen transition-all">          
      <div className="bg-white px-8 w-96 mt-8">
        { errorData ?
        <div className="px-2 flex justify-center">
          <small className="text-red-600">Log in failed : {errorData}</small>
        </div>
        :null
         }
        { loginSuccesful ?
        <div className="px-2 flex justify-center">
          <small className="text-green-600">Login successful</small>
        </div>
        :null
         }
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="kaburu@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a className="text-blue-500 hover:text-blue-700" href="#">
              Forgot password?
            </a>
          </div>
          <div>
            <button
              className="bg-secondary-1 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}>
              <span className="flex">
                <span className="mr-2">Login</span>
                  {loggingIn ?
                  <Spinner/>
                  :
                  null
                  }
              </span>
            </button>
          </div>
        </div>
      </div>      
      <div className="text-sm p-3">
        <p>or</p>        
      </div>
      <hr></hr>
      <div className="flex flex-col w-full gap-4">
        <button className="bg-blue-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
          Continue with Facebook
        </button>
        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
          Continue with Google
        </button>
        <button className="bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
          Continue with Apple
        </button>
      </div>
      <div className="mt-4">
        <p className="text-sm">
          No account? <a className="text-blue-500 hover:text-blue-700" href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
