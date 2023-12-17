"use client"
import React ,{useState}from 'react';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';
export default function Logins() {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const router = useRouter()
  const login =()=>{
    if(email === "admin@gmail.com"&& password==="admin123"){
      
          Swal.fire({
              title: "Sweet!",
              text: "Login successfully !.",
            })
         
     router.push('./Admin')
      
    }else{
      Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
    }

  // ...
}




  return (
    <>
    
      <div className=" b flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block h-20 w-11 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email} onChange={(e)=> setEmail(e.target.value)} 
               />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   value={password} onChange={(e)=> setPassword(e.target.value)} 
               />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={login}
            >
                Sign in
              </button>
            </div>
      

        
        </div>
      </div>
    </>
  )
}
