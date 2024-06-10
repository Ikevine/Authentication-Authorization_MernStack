import React, { useState } from 'react'
import img from '../image/Screenshot 2024-05-24 163357.png'
import { Link } from 'react-router-dom'
export default function UserPofile() {
  const [formData, setformData] = useState({})
  const handleTextChange = (e) => {
     setformData({
      ...formData,
      [e.target.id]:e.target.value
     })
  }

  return (
    <div className='flex flex-col items-center justify-between w-full m-2'>
      <Link to='/myposts/hjdjk'>
        <h1 className='font-bold px-4 py-2 rounded-md bg-slate-400 mb-2'>My posts</h1>
      </Link>
      
        {/* Upper image */}
      <div className="flex flex-col justify-center items-center">
        <img src={img} alt="img" className='rounded-full w-24 h-24'/>
        <h1 className='font-medium text-xl text-slate-900'>Ernest Achiever</h1>
      </div>
       
       {/* form image */}
       <form className='flex flex-col gap-4 w-full justify-center items-center mt-8'>
          <p className='p-4 bg-red-600 text-white font-medium'>Error on it way to concure the city</p>
          <input onChange={handleTextChange} type="text" className='border p-2 focus:outline-none w-[80%]' placeholder='Full name' id="username" />
          <input onChange={handleTextChange} type="text" className='border p-2 focus:outline-none w-[80%]' placeholder='Email' id="email" />
          <input onChange={handleTextChange} type="password" className='border p-2 focus:outline-none w-[80%]' placeholder="Password" id="password" />
          <input onChange={handleTextChange} type='password' className='border p-2 focus:outline-none w-[80%]' placeholder='Confirm password' id="confirmPassword" />
          <button className='py-2 w-[80%] bg-blue-700 text-white rounded-md'>Update user</button>
       </form>

    </div>
  )
}
