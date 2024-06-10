import React from 'react'
import { Link } from 'react-router-dom'
import PostAuth from './PostAuth'

export default function PostItem({id , thumbnail, category, title, desc , auhtorID}) {
  
  const shortDescrption = desc.length > 20 ? desc.substr(0, 10)+'...': desc;
  const shortTitle = title.length > 10 ? title.substr(0, 20)+'...': title;
  return (
    // The rectangler should have limited length
    <div className='bg-slate-100 rounded-md gap-16 px-2'>
      <img src={thumbnail} alt="thumbnail" className='w-full h-[50%] rounded-md'/>

      <div className="mt-4">
        <Link to={`/posts/${id}`}>
          <h2 className='font-medium text-slate-900 text-lg'>{shortTitle}</h2>
        </Link>
        <p>{shortDescrption}</p>
      </div>

      <div className="flex justify-between mt-4">
          <PostAuth/>
          <Link className='p-2 rounded-md bg-slate-300 text-slate-700' to={`/posts/categories/${category}`}>
            {category}
          </Link>
      </div>

    </div>
  )
}
