import React from 'react'
import img from '../image/Screenshot 2024-05-24 163437.png'
export default function Postdetail() {
  return (
    <section className='bg-slate-200 p-2'>

      <div className="flex justify-between px-4">
        {/* Left side */}
        <div className="flex gap-2 items-center">
          <img src={img} alt="image" className='w-[54px] h-[54px] rounded-full'/>
          <div className="">
             <h2 className='font-medium text-slate-800'>Miss Kevine</h2>
             <p>Posted now</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex gap-2">
          <button className='py-2 px-4 bg-red-500 rounded-md '>Edit</button>
          <button className='py-2 px-4 bg-green-500 rounded-md '>Delete</button>
        </div>
       </div>

{/* Post body */}
       <div className="flex flex-col gap-8 items-center justify-center">
         <h2 className='text-2xl font-medium text-slate-800'>This is the post title</h2>
         <img src={img} alt="Post image" className='rounded-md'/>
         <div className="flex flex-col gap-4 w-[90%]">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fuga ratione inventore libero? Nemo quae itaque eligendi vero neque, aliquam nam similique quod, repellat quasi rerum ipsa minima repudiandae pariatur!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim iure labore in voluptatibus voluptas illum, dolore, aperiam quam perspiciatis cupiditate, minima odio. Sequi, optio numquam natus nulla totam officiis tempora.
          Ullam qui possimus dolor sapiente eum quam, cum corrupti molestiae nihil natus dolore illum, magnam ut ipsam explicabo? Itaque aspernatur debitis sint fuga maiores commodi unde expedita doloribus dolores voluptates.
          Reprehenderit esse, magni dignissimos, eos, ducimus iimus! Ullam autem et sequi quidem molestiae.
          Inventore laboriosam nulla assumenda sapientem placeat dignissimos eveniet quod consectetur perspiciatis omnis fuga provident unde, ducimus ab distinctio praesentium iusto magnam. Perferendis, ratione esse tenetur saepe ut consequatur.
          Laborum nostrum fuga 
          </p>

          <p>atibus officiis voluptate, deserunt sint est delectus tempora dolor id rerum architecto animi iusto totam! Sapiente natus animi nemo numquam quam deleniti laudantium.
          Dolorum commoimilique aut ut assumenda corrupti minima possimus voluptatibus repellat ab expedita ducimus. Iure repellendus rerum inventore dolore qui cum dolorum iusto exercitationem repudiandae!
          Magni illum aspernatur laborum a reiciendis. Consequuntur eos eligendi alias suscipit corporis atque voluptatem! Cumque beatae aperiam, molestiae asperiores officia velit distinctio nam temporibus ad nesciunt itaque. Illum, soluta consequuntur!
          Harum voluptate minus sapiente ducimus ut rerum dolores dignissimos consequatur. Suscipit voluptatem ullam excepturi neque incidunt modi id nisi, aspernatur voluptates cupiditate consectetur, possimus dolorum? Debitis tenetur sunt similique praesentium!
         </p>
         </div>
         
       </div>
    </section>
  )
}
