import React, { useState } from 'react'
 import ReactQuill from 'react-quill';
 import 'react-quill/dist/quill.snow.css'
export default function CreatePost() {
  const [title, settitle] = useState('')
  const [Category, setCategory] = useState('uncategorized')
  const [decription, setDecription] = useState("");
  const modules={
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const format=[
    'header',
    'bold', 'italic', 'underline','strike', 'blockquote',
    'list', 'bulle','indent', 
    'link', 'image'
  ]

  const posts = ["name", "ishimwe", "ama fish"]
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-6">

      <h1 className='text-2xl w-32  text-slate-800 font-bold'>Create Post</h1>
      <p className='bg-red-500 px-4 rounded-sm font-medium text-lg'>Error occured</p>

      {/* Form to create user */}
      <form className='flex flex-col gap-8 px-16'>
        {/* dropdown option */}
        <input type="text" className='border p-2 focus:outline-none rounded-md' placeholder='title'/>
          <select className='border p-2 focus:outline-none rounded-md'>
            {
              posts.map(cat => <option key={cat} >{cat}</option>)
            }
          </select>
          <input type="file" accept='png, jpg, jpeg' />
          <ReactQuill modules={modules} formats={format} className='h-24 mt-4'/>
          <button className='mt-8 px-4 py-2 bg-blue-600 rounded-md font-medium text-xl' >Create</button>
      </form>
    </div>
   
  )
}
