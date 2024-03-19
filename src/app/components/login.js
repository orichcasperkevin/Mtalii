import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen ">          
      <div className="bg-white px-8 w-96 mt-8">
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
              onClick={handleLogin}
            >
              Login
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
