import React from 'react'
import img from '../assets/imgs.jpg';
import google from '../assets/google.png'
import fb from '../assets/fb.png'

const SignUpPage = () => {
  return (
    <div className='flex lg:p-20 md:p-10 p-5 lg:w-full lg:flex-row md:flex-col flex-col'>
      <div className='rounded-l-lg bg-neutral-100 p-10 w-full'>
        <h1 className='lg:text-5xl md:text-3xl text-2xl text-start pt-2 pl-8 text-neutral-800 font-medium'> Welcome Back! </h1>
        <p className='text-neutral-400 text-sm font-normal pb-7 pl-11 pt-4'> Welcome to DigoSoft Tech - Let's create your account </p>
        <div className='lg:px-10 md:px-10 pt-5'>
          <input
            type="text"
            class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Full Name" />
        </div>
        <div className='lg:px-10 md:px-10 pt-7'>
          <input
            type="text"
            class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Email Address" />
        </div>
        <div className='lg:px-10 md:px-10 pt-7'>
          <input
            type="text"
            class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Password" />
          <p class="flex items-center gap-1 mt-2 font-sans text-sm antialiased font-light leading-normal text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 -mt-px">
              <path fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"></path>
            </svg>
            Use at least 8 characters, one uppercase, one lowercase and one number.
          </p>
        </div>
        <div className='lg:px-10 md:px-10 pt-5'>
          <input
            type="text"
            class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Confirm Password" />
        </div>
        <div className='lg:px-10 md:px-20 pt-7'>
          <button className='bg-neutral-800 w-full p-3 rounded text-md'>SignUp Now</button>
          <p className='text-neutral-500 font-normal text-sm pt-3 text-center'> Already have an account? <a href="/signin" className='text-blue-500'>Login</a> </p>
        </div>
        <div className='text-center pt-5'>
          <h5 className='text-sm text-neutral-800'> or </h5>
        </div>
        <div className='flex lg:flex-row flex-col justify-center lg:p-8 md:p-8'>
          <div className='border p-2 flex justify-center rounded border-slate-200 cursor-pointer hover:bg-neutral-200 m-2 w-full'>
            <img src={ google } alt="Google" className='size-6' />
            <h6 className='text-neutral-600 font-medium pl-2'> Google </h6>
          </div>
          <div className='border p-2 flex justify-center rounded border-slate-200 cursor-pointer hover:bg-neutral-200 m-2 w-full'>
            <img src={ fb } alt="Google" className='size-6' />
            <h6 className='text-neutral-600 font-medium pl-2'> GitHub </h6>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <img src={img} alt="Image" className='rounded size-full' />
      </div>
    </div>
  )
}

export default SignUpPage
