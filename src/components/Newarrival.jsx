import Image from 'next/image'
import React from 'react'

export default function Newarrival() {
  

  return (

    <>
    
    <div className="flex flex-col justify-center items-center">
      <div ><h1 className='text-3xl font-bold'>FEATURED PRODUCTS</h1>
      <p className='pt-5 pl-10'>we have your occasion covered</p></div>
      <div className="flex-col">
      <div className=''>
      <div className="featured flex w-full flex-wrap  justify-evenly overflow-hidden ">
      <div className='relative w-96 h-96 bg-red-600'>
      <Image src='/Images/mybrownhat.jpg' fill sizes='100%' className=' transition-opacity ease-out z-10 hover:opacity-0'></Image>
      <Image src='/Images/myblackdress.jpg' fill sizes='100%' className=''></Image>
    </div>
    <div className="featured flex w-full flex-wrap  justify-evenly overflow-hidden ">
      <div className='relative w-96 h-96 bg-red-600'>
      <Image src='/Images/mypinkshirt.jpg' fill sizes='100%' className=' transition-opacity ease-out z-10 hover:opacity-0'></Image>
      <Image src='/Images/myredshirt.jpg' fill sizes='100%' className=''></Image>
    </div></div>
    <div className="featured flex w-full flex-wrap  justify-evenly overflow-hidden ">
      <div className='relative w-96 h-96 bg-red-600'>
      <Image src='/Images/mygoodsuit.jpg' fill sizes='100%' className=' transition-opacity ease-out z-10 hover:opacity-0'></Image>
      <Image src='/Images/mywhitedress.jpg' fill sizes='100%' className=''></Image>
    </div></div>
    <div className="featured flex w-full flex-wrap  justify-evenly overflow-hidden ">
      <div className='relative w-96 h-96 bg-red-600'>
      <Image src='/Images/myjeandress.jpg' fill sizes='100%' className=' transition-opacity ease-out z-10 hover:opacity-0'></Image>
      <Image src='/Images/mycheckeredtshirt.jpg' fill sizes='100%' className=''></Image>
    </div></div>
    <div className="featured flex w-full flex-wrap  justify-evenly overflow-hidden ">
      <div className='relative w-96 h-96 bg-red-600'>
      <Image src='/Images/myblackhat.jpg' fill sizes='100%' className=' transition-opacity ease-out z-10 hover:opacity-0'></Image>
      <Image src='/Images/myblueshirt                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .jpg' fill sizes='100%' className=''></Image>
    </div></div>

    </div>
        
      
      </div>
      </div>
    
    </div>
    </>
  )
}
