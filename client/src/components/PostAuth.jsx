import React from 'react'
import img from '../image/Screenshot 2024-05-24 163437.png'
export default function PostAuth() {
  return (
    <div>
        <div className="flex gap-2">
            <img src={img} alt="user image" className='w-[32px h-[32px] rounded-full' />
            <div className="flex flex-col">
                <h2 className='font-medium text-slate-800'>Ikevine</h2>
                <p>Just know</p>
            </div>
        </div>
        
    </div>
  )
}
