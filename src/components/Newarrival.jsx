import React from 'react'

export default function Newarrival() {
  return (
    <div>
      <h1>FEATURED PRODUCTS</h1>
      <p>we have your occasion covered</p>
      <div className="featured flex w-full flex-wrap  justify-evenly ">
        <img className='h-[350px] w-[250px] pb-5' src="Images/mybrownhat.jpg" alt="" />
        <img className='h-[350px] w-[250px] pb-5' src="Images/mysuit.jpg" alt="" />
        <img className='h-[350px] w-[250px] pb-5' src="Images/mypinkshirt.jpg" alt="" />
        <img className='h-[350px] w-[250px] pb-5' src="Images/myblueshirt.jpg" alt="" />
        <img className='h-[350px] w-[250px]' src="Images/myblackdress.jpg" alt="" />
        <img className='h-[350px] w-[250px]' src="Images/myjeandress.jpg" alt="" />
        <img className='h-[350px] w-[250px]' src="Images/myblackhat.jpg" alt="" />
        <img className='h-[350px] w-[250px]' src="Images/mypinksweatshirt.jpg" alt="" />
      </div>
    </div>
  )
}
