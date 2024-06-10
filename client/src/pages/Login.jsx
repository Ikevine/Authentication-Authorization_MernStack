import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
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
       <h1>Sign In</h1>
       <p className='p-4 text-slate-700 bg-red-500'>This is an error message</p>
       <form className='flex flex-col gap-4 w-full justify-center items-center'>
        <input onChange={handleTextChange} type="text" className='border p-2 focus:outline-none w-[80%]' placeholder='Email' id="email" />
        <input onChange={handleTextChange} type="password" className='border p-2 focus:outline-none w-[80%]' placeholder="Password" id="password" />
        <button className='py-2 w-[80%] bg-blue-700 text-white rounded-md'>Login</button>
       </form>
      <p>Don't have a have the account? <Link to="/register">Sign Up</Link></p>
    </div>
  )
}
