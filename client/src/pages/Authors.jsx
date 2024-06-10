import React from 'react'
import Author from '../components/Author'
import img from '../image/Screenshot 2024-05-24 163410.png'
import img2 from '../image/Screenshot 2024-05-24 163357.png'
const data = [
  {id:1, avatar:img, name:'kevine'},
  {id:2, avatar:img2, name:'Irakoze'}
]
export default function Authors() {
  return (
    <section className='grid grid-cols-4'>
      {
         data? data.map(({id, avatar, name})=>(
          <Author
            key={id}
            id={id}
            avatar={avatar}
            name={name}
          />
         )): <h1>No data available</h1>
      }
      
    </section>
  )
}
