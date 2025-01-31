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
    
   