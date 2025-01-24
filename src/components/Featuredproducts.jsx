import React from 'react'

export default function Featuredproducts() {
  return (
    <div className='flex w-full flex-wrap justify-evenly'>
      <img className='h-[350px] w-[250px]' src="Images/mypinksweatshirt.jpg" alt="" />
        <img className='h-[350px] w-[250px]' src="Images/mybelt.jpg" alt="" />
        <img className='h-[350px] w-[250px]' src="Images/mybrownhat.jpg" alt="" />
        <img className='h-[350px] w-[250px]' src="Images/myblackhat.jpg" alt="" />
        
        <div className='relative w-96 h-96 bg-red-600'>
      <Image src='/Images/mybrownhat.jpg' fill sizes='100%' className=' transition-opacity ease-out z-10 hover:opacity-0'></Image>
      <Image src='/Images/myblackdress.jpg' fill sizes='100%' className=''></Image>
    </div>



    </div>
  )
}
