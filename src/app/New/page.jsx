"use client"

import Featuredproducts from '@/components/Featuredproducts'
import Newarrival from '@/components/Newarrival'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {
  const router=useRouter()
  const [product, setProduct] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [desc, setDesc] = useState("")
  const [productUrl, setProductUrl] = useState("")
  const [instock, setInstock] = useState("")

  const [productErr, setProducterr] = useState("")
  const [priceErr, setPriceerr] = useState("")
  const [categoryErr, setCategoryerr] = useState("")
  const [descErr, setDescerr] = useState("")
  const [productUrlErr, setProductUrlerr] = useState("")
  const [instockErr, setInstockerr] = useState("")


  const handlesubmit = async (e) => {
    e.preventDefault()
    console.log(e)

    if (!product) {
      setProducterr("pls enter your product")
      console.log("pls enter Your product")
    }
    else {
      setProducterr('')
    }



    if (!price) {
      setPriceerr("pls enter your price")
      console.log("pls enter Your price")
    }
    else {
      setPriceerr('')
    }



    if (!category) {
      setCategoryerr("pls enter category of product")
      console.log("pls enter category of products")
    }
    else {
      setCategoryerr('')
    }


    if (!desc) {
      setDescerr("pls fill in your product decription")
      console.log("pls enter Your product")
    }
    else {
      setDescerr('')
    }

    if (!productUrl) {
      setProductUrlerr("pls enter your productUrl")
      console.log("pls enter Your productUrl")
    }
    else {
      setProductUrlerr('')
    }

    if(productUrl !=''){
      // make a request to the endpoint /api/createProducts
      const res= await axios.post("http://localhost:3000/api/createProducts", {product,price,category,desc,productUrl,instock})

       console.log("this is the response: ", res )
      //  if product is addede successfully, we navigate to the home page
       if(res.status==201){
          router.replace('/')
       }



    }
  }


  return (



    <div className=''>

      <div className='bg-gradient-to-r from-black to-slate-600
       h-screen  flex justify-center items-center'>

        <form onSubmit={handlesubmit} action="" className=' flex flex-col gap-5  text-black border-gray-400
         border-[1px] py-8 px-8 rounded-md'>

          <input onChange={(e) => setProduct(e.target.value)} type="text" placeholder='Productname '
            className=' border-none  focus:outline-none focus:border-none text-black rounded-md py-2 px-2' />
          {
            productErr && (<label className="text-red-500" htmlfor="">{productErr} </label>)
          }

          <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Price'
            className='border-none  focus:outline-none focus:border-none text-black rounded-md py-2 px-2' />
          {
            priceErr && (<label className="text-red-500" htmlfor="">{priceErr} </label>)
          }


          <input onChange={(e) => setCategory(e.target.value)} type="text" placeholder='Category'
            className='border-none  focus:outline-none focus:border-none text-black rounded-md py-2 px-2' />
          {
            categoryErr && (<label className="text-red-500" htmlfor="">{categoryErr}</label>)
          }

          <textarea onChange={(e) => setDesc(e.target.value)} type="text" placeholder='type  in your description..'
            className='w-[400px]  h-[150px]  px-3 border border-gray-300 focus:outline-none rounded-md' />
          {
            descErr && (<label className="text-red-500" htmlfor="">{descErr} </label>)
          }

          <input onChange={(e) => setProductUrl(e.target.value)} type="text" placeholder='ProductUrl'
            className='border-none  focus:outline-none focus:border-none text-black rounded-md py-2 px-2' />
          {
            productUrlErr && (<label className="text-red-500" htmlfor="">{productUrlErr} </label>)
          }

          <input onChange={(e) => setInstock(e.target.value)} type="text" placeholder='Instock'
            className='border-none  focus:outline-none focus:border-none text-black rounded-md py-2 px-2' />
          {
            instockErr && (<label className="text-red-500" htmlfor="">{instockErr}</label>)
          }

          <button className='bg-green-800  text-white rounded-md px-3 py-3   hover:opacity-80 '>Summit</button>




        </form>

      </div>
    

    </div>
  )
}
