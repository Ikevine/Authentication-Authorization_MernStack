import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-between px-16 py-4 w-full'>
        <Link to='/'>
            <div className="flex">
                <h1 className="text-2xl font-bold text-slate-900">Vlife</h1>
                <i></i>
            </div>
        </Link>
        
        <ul className='flex gap-4'>
            <Link to='/profile/789'><li className=''>Ikevine</li></Link>
            <Link to='/create'><li className=''>Create Post</li></Link>
            <Link to='/authors'><li className=''>Author</li></Link>
            <Link to='/logout'><li className=''>Logout</li></Link>

        </ul>
    </div>
  )
}
