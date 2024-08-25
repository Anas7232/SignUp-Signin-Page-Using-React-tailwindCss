import React from 'react'
import loginimg from '../assets/login.jpg';
import google from '../assets/google.png'
import fb from '../assets/fb.png'

const SignInPage = () => {
  return (
    <div className='flex lg:p-20 md:p-10 p-5 lg:w-full lg:flex-row md:flex-col flex-col'>
      <div className='rounded-l-lg bg-neutral-100 p-10 w-full'>
        <h1 className='lg:text-5xl md:text-3xl text-2xl text-start pt-2 lg:pl-10 md:pl-10  text-neutral-800 font-medium'> Sign In </h1>
        <p className='text-neutral-400 text-sm font-normal pb-7 lg:pl-11 md:pl-10 pt-4'> Welcome to DigoSoft Tech - Let's login your account </p>
        <div className='lg:px-10 md:px-10 pt-7'>
          <input
            type="text"
            class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Email Address" />
        </div>
        <div className='lg:px-10 md:px-10 pt-5'>
          <input
            type="text"
            class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter Password" />
        </div>
        <div className='lg:px-10 md:px-20 pt-7'>
          <button className='bg-neutral-800 w-full p-3 rounded text-md'>Login Now</button>
          <p className='text-neutral-500 font-normal text-sm pt-3 text-center'> Don't have an account? <a href="" className='text-blue-500'>Signup</a> </p>
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
        <img src={loginimg} alt="Image" className='rounded size-full' />
      </div>
    </div>
  )
}

export default SignInPage
