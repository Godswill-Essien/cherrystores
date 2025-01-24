"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function ProductImages() {
  const images = [
    {
      id: 1,
      url: "https://plus.unsplash.com/premium_photo-1708110920881-635419c3411f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      url: "https://plus.unsplash.com/premium_photo-1708110770188-3e4216b93119?q=80&w=993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  const [index, setIndex] = useState(0)
  console.log(index)

  return (
    <div className=''>
      <div style={{ height: "300px" }} className=" relative bg-slate-700 ">
        <Image src={images[index].url}
          fill sizes="50vw" alt="main image"
          className='object-contain rounded-md bg-center'
        />
      </div>



      <div className='flex gap-4 mt-4 cursor-pointer'>
        {
          images.map((image, i) => (
            <div className="w-1/4 h-32 relative gap-4 mt-8" key={image.id}>
              <Image src={image.url}
                fill sizes="25vw" alt="main image"
                className='object-cover rounded-md'
                onClick={() => setIndex(i)}
              />

            </div>
          ))
        }

      </div>

    </div>
  )
}