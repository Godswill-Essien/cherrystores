import Image from 'next/image'
import React from 'react'

export default async function Newarrival() {
const NEXT_PUBLIC_ENDPOINT="http://localhost:3002/api/"
  const res=await fetch(`${NEXT_PUBLIC_ENDPOINT}products`)
  const data=await res.json()
console.log("this is the data",  data)

  return (

    <>
    
    <div className="flex flex-col justify-center items-center">
      <div ><h1 className='text-3xl font-bold'>FEATURED PRODUCTS</h1>
      <p className='pt-5 pl-10'>we have your occasion covered</p></div>

      {
        data.result.length>0?
        data.result.map(res=>(
          <div className="featured flex flex-col w-full flex-wrap  justify-evenly overflow-hidden ">
          <img className='h-[350px] w-[250px] hover:scale-110  pb-5' src="Images/mybrownhat.jpg" alt="" />
          <p>{res.productName}</p>
          <p>#4000</p>
        </div>
        ))  :'loading.....'
      }
     
    </div>

    
    </>
  )
}
