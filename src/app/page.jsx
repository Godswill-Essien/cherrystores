import Navbar from '@/components/Navbar'
import Newarrival from '@/components/Newarrival'
import ProductImages from '@/components/ProducteImages'
import Singleproduct from '@/components/Singleproduct'
import React from 'react'

export default function page() {
  return (

    <div>
  
      <Newarrival/>
      {/* <Newarrival/> */}
      <Singleproduct />
      {/* <ProductImages/> */}
    </div>
  )
}
