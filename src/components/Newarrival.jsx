import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Newarrival() {
  const NEXT_PUBLIC_ENDPOINT = "http://localhost:3000/api/"
  const res = await fetch(`${NEXT_PUBLIC_ENDPOINT}getProducts`)
  const data = await res.json()
  console.log("this is the data", data)

  return (

    <>
      <p className='pt-5 pl-10'>we have your occasion covered</p>

      <div className="flex justify-center items-center ">
        <div ><h1 className='text-3xl font-bold flex  w-full h-full'>FEATURED PRODUCTS</h1>

          <div className="w-full flex gap-5">
            {
              data.length > 0 ?
                data.map(res => (
                  <Link href={res._id} className="featured flex flex-col w-full flex-wrap   overflow-hidden " key={res._id}>
                    <Image className=' hover:scale-110 ' src={res.productUrl} alt="" width={350} height={250} sizes='250px' />
                    <p className=' text-sm font-bolder' >Product name:{res.productName}</p>
                    <p>inStock: {res.inStock}</p>
                  </Link>

                )) : 'loading.....'
            }
          </div>

        </div>
      </div>

    </>
  )
}
