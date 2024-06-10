import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className='bg-slate-900 p-4 flex flex-col gap-4'>
      <ul className='flex flex-wrap gap-8'>
        <Link to='/posts/categories/Agriculture'><li className='p-2 hover:bg-slate-950 bg-slate-800 text-white rounded-md'>Agriculture</li></Link>
        <Link to='/posts/categories/Business'><li className='p-2 hover:bg-slate-950 bg-slate-800 text-white rounded-md'>Business</li></Link>
        <Link to='/posts/categories/Education'><li className='p-2 hover:bg-slate-950 bg-slate-800 text-white rounded-md'>Education</li></Link>
        <Link to='/posts/categories/Entertainment'><li className='p-2 hover:bg-slate-950 bg-slate-800 text-white rounded-md'>Entertainment</li></Link>
        <Link to='/posts/categories/Art'><li className='p-2 hover:bg-slate-950 bg-slate-800 text-white rounded-md'>Art</li></Link>
        <Link to='/posts/categories/Investment'><li className='p-2 hover:bg-slate-950 bg-slate-800 text-white rounded-md'>Investment</li></Link>
        <Link to='/posts/categories/Uncategorized'><li className='p-2 hover:bg-slate-950 bg-slate-800 text-white rounded-md'>Uncategoriezed</li></Link>
        <Link to='/posts/categories/weather'><li className='p-2 hover:bg-slate-950 bg-slate-800 text-white rounded-md'>Weather</li></Link>
      </ul>
      <hr/>
      <h3 className='w-full text-center text-white'>All Right Reserved@ Copytight Ikevine</h3>
    </footer>
  )
}
