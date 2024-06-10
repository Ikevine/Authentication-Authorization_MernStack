import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({})
  const handleTextChange =(e)=>(
     setFormData({
      ...formData,
      [e.target.id]: e.target.value
     })
    )
    console.log(formData);
  return (
    <div className='flex flex-col justify-between items-center w-full gap-4'>
       <h1>Sign Up</h1>
       <p className='p-4 text-slate-700 bg-red-500'>This is an error message</p>
       <form className='flex flex-col gap-4 w-full justify-center items-center'>
        <input onChange={handleTextChange} type="text" className='border p-2 focus:outline-none w-[80%]' placeholder='Full name' id="username" />
        <input onChange={handleTextChange} type="text" className='border p-2 focus:outline-none w-[80%]' placeholder='Email' id="email" />
        <input onChange={handleTextChange} type="password" className='border p-2 focus:outline-none w-[80%]' placeholder="Password" id="password" />
        <input onChange={handleTextChange} type='password' className='border p-2 focus:outline-none w-[80%]' placeholder='Confirm password' id="confirmPassword" />
        <button className='py-2 w-[80%] bg-blue-700 text-white rounded-md'>Register</button>
       </form>
      <p>Already have the account? <Link to="/login">Sign in</Link></p>
    </div>
  )
}
