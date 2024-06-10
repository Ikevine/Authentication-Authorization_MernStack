import React, { useState } from 'react'
import image1 from '../image/Screenshot 2024-05-24 163357.png';
import image2 from '../image/Screenshot 2024-05-24 163410.png';
import PostProduct from './PostItem'
const Dump_Posts = [
    {
        id: '1',
        Thumbnail: image1,
        category: 'Education',
        title:'This is a title1',
        desc:'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor held high, consectetur',
        auhtorID:3
    },
    {
        id:'2',
        Thumbnail: image2,
        category: 'Science',
        title:'This is a title1',
        desc:'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor held high, consectetur',
        authorID:4
    },
]
export default function Posts() {
    const [Posts, setPosts] = useState(Dump_Posts)
  return (
    <div className='grid grid-cols-3 gap-4 '>
        {Posts? 
            Posts.map(({id, Thumbnail, category, title, desc, authorID})=>(
                <PostProduct
                   key={id}
                   id={id}
                   thumbnail={Thumbnail}
                   category={category}
                   title={title}
                   desc={desc}
                   authorID={authorID}
                />
            ))
        : <h1>The data is not availale</h1>}
    </div>
  )
}
