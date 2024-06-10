import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardPost({id, thumbnail, desc}) {
    
  return (
    <div className='flex justify-between px-8 items-center'>
       <div className="flex gap-4">
        <img src={thumbnail} alt="user_post image" className='h-24 w-24 rounded-md'/>
        
        <p className='w-48'>{desc}</p>
       </div>

       <div className="flex gap-4">
        <Link to='/myposts/id'> <button className='px-4 py-2 font-medium rounded-md'>View</button></Link>
        <Link to='/posts/id/edit'> <button className='px-4 py-2 font-medium rounded-md bg-red-500'>Edit</button></Link>
        <Link to='/myposts/id/delete'> <button className='px-4 py-2 font-medium rounded-md bg-blue-700'>Delete</button></Link>
       </div>
    </div>
  )
}
