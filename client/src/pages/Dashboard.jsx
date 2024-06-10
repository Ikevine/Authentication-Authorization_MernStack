import React from 'react'
import img2 from '../image/Screenshot 2024-05-24 163410.png'
import DashboardPost from '../components/DashboardPost.jsx';

const data =[
  {
    id: '1',
    thumbnail: img2,
    desc:'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor held high, consectetur',
  },
  {
    id: '2',
    thumbnail: img2,
    desc:'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor held high, consectetur',
  },
  
]
export default function Dashboard() {
  return (
    <section className='flex flex-col gap-4 p-4'>
       {
          data? data.map(({id, thumbnail, desc})=>(
              <DashboardPost
                key={id}
                id={id}
                thumbnail={thumbnail}
                desc={desc}
              />
          )): <h1>No data received</h1>
       }
    </section>
  )
}
