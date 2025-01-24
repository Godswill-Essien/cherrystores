import Image from 'next/image'
import React from 'react'

export default function Newarrival() {
  

  return (

    <>
    
    <div className="flex flex-col justify-center items-center">
      <div ><h1 className='text-3xl font-bold'>FEATURED PRODUCTS</h1>
      <p className='pt-5 pl-10'>we have your occasion covered</p></div>
      <div className="featured flex w-full flex-wrap  justify-evenly overflow-hidden ">
        <img className='h-[350px] w-[250px] hover:scale-110  pb-5' src="Images/mybrownhat.jpg" alt="" />
        <img className='h-[350px] w-[250px] hover:scale-110  pb-5' src="Images/mygoodsuit.jpg" alt="" />
        <img className='h-[350px] w-[250px] hover:scale-110  pb-5' src="Images/mypinkshirt.jpg" alt="" />
        <img className='h-[350px] w-[250px] hover:scale-110  pb-5' src="Images/mygoodblue.jpg" alt="" />
        <img className='h-[350px] w-[250px] hover:scale-110 ' src="Images/myblackdress.jpg" alt="" />
        <img className='h-[350px] w-[250px] hover:scale-110 ' src="Images/myjeandress.jpg" alt="" />
        <img className='h-[350px] w-[250px] hover:scale-110 ' src="Images/myblackhat.jpg" alt="" />
        <img className='h-[350px] w-[250px] hover:scale-110 ' src="Images/mypinksweatshirt.jpg" alt="" />
      </div>
    </div>

    <div className='relative w-96 h-96 bg-red-600'>
      <Image src='/Images/mybrownhat.jpg' fill sizes='100%' className=' transition-opacity ease-out z-10 hover:opacity-0'></Image>
      <Image src='/Images/myblackdress.jpg' fill sizes='100%' className=''></Image>
    </div>
    </>
  )
}
