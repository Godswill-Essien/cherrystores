import Featuredproducts from '@/components/Featuredproducts'
import Newarrival from '@/components/Newarrival'
import React from 'react'

export default function page() {
  return (
    <div className='bg-white text-black'>
      <Newarrival/>
      <Featuredproducts/>
    </div>
  )
}
