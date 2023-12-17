"use client"
import React ,{useState}from 'react';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';
import "./log.css"

export default function Logins() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    if (email === "admin@gmail.com" && password === "admin123") {
      Swal.fire({
        title: "Sweet!",
        text: "Login successfully!.",
      });
      setEmail('')
      setPassword('')
      router.push('/Admin');


    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
  };

  return (
    <div className="flex formss min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Sign in to Admin Page
        </h2>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full h-12 px-4 mt-2 border rounded-md text-gray-900 focus:outline-none focus:ring focus:border-indigo-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full h-12 px-4 mt-2 border rounded-md text-gray-900 focus:outline-none focus:ring focus:border-indigo-300"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full h-12 bg-indigo-600 text-black rounded-md font-semibold hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300"
            onClick={login}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
