"use client"; // Ensure this runs on the client side

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Newarrival() {
  const NEXT_PUBLIC_ENDPOINT = "http://localhost:3000/api/";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${NEXT_PUBLIC_ENDPOINT}getProducts`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      <p className='pt-5 pl-10'>We have your occasion covered</p>

      <div className="flex justify-center items-center">
        <div>
          <h1 className='text-3xl font-bold flex w-full h-full'>FEATURED PRODUCTS</h1>

          <div className="w-full flex h-screen gap-5 justify-center items-center">
            {loading ? (
              <p>Loading...</p>
            ) : data.length > 0 ? (
              data.map((res) => (
                <Link href={res._id} className="featured flex flex-col w-full flex-wrap overflow-hidden" key={res._id}>
                  <Image className='hover:scale-110' src={res.productUrl} alt="" width={350} height={250} sizes='250px' />
                  <p className='text-sm font-bolder'>Product name: {res.productName}</p>
                  <p>In Stock: {res.inStock}</p>
                </Link>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
