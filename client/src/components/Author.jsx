import React from 'react'
import img from '../image/Screenshot 2024-05-24 163410.png'
export default function Author({avatar, name}) {
  return (
    <div className='flex items-center justify-between px-2 bg-slate-100'>
        <img src={avatar} alt="author Image" className='rounded-full w-[54px] h-[54px]'/>
        <div className="flex flex-col gap-2">
            <h1>{name}</h1>
            <p>2 posts</p>
        </div>
    </div>
  )
}
