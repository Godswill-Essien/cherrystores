"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { SiVisa } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";
import { FaCcAmex } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { FaCcDiscover } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { PiRadioButton, PiUploadSimpleThin } from "react-icons/pi";
import { RiPinterestFill } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { useParams } from 'next/navigation'
import axios from 'axios';






export default function Singleproduct() {
    const [Value, setValue] = useState(0)
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [productData, setProductData]=useState('')
    const {id} = useParams()
    console.log("this is the",  typeof(id))

    const photos = [
        'https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_06.png?v=1733810922',
        'https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_03.png?v=1733810921',
        'https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_15.png?v=1733810922',

    ];

    const handlePrevClick = () => {
        if (currentPhotoIndex > 0) {
            setCurrentPhotoIndex(currentPhotoIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPhotoIndex < photos.length - 1) {
            setCurrentPhotoIndex(currentPhotoIndex + 1);
        }
    };


    function changeimage() {

    }
    //    VALUE



    function increase() {
        setValue(Value + 1)


    }

    function decrease() {
        if (Value >= 1) {
            setValue(Value + 1)
        }
    }
    
    const getSingleProd= async(id)=>{
        try{
            const res=await fetch(`http://localhost:3000/api/getProducts/${id}`)
           
            console.log("this  is the response data", res)
            // setProductData(data)
            // console.log(productData)
            return data
        }
        catch(err){
            console.log(err.message)
        }
        }
       
    useEffect(()=>{
        getSingleProd(id)
    }, [])

    return (
        <div className=' '>

            {/*             
            <div>
                <button className='text-black' onClick={handlePrevClick}>Previous</button>
                <button className='text-black' onClick={handleNextClick}>Next</button>
                <button  src={photos[currentPhotoIndex]} alt="Current photo" />
            </div> */}



            <div className='flex gap-10 mt-[50px]'>

                {/* PICTURES SECTION */}

                <div className='flex gap-6 flex-col'>
                    <div className='  w-max border-gray-300 border-[1px] h-max translate-x-4 rounded-lg'>
                        <Image
                            className='bg-blue-500  w-[600px]  h-[750px]'
                            alt="red t-shirt"
                            // sizes="25vh"
                            // fill
                            height="0"
                            width="900"
                            src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_06.png?v=1733810922" />
                    </div>


                    <div className='flex gap-4'>


                        <div className=' border-gray-300 border-[1px]  h-max translate-x-4 rounded-lg'>
                            <Image
                                className='bg-blue-500  w-[120px]  h-[130px] transition-all  hover:opacity-85 '
                                alt="red t-shirt"
                                // sizes="25vh"
                                // fill
                                height="0"
                                width="900"
                                src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_06.png?v=1733810922" />
                        </div>

                        <div className=' border-gray-300 border-[1px]  h-max translate-x-4 rounded-lg'>
                            <Image
                                className='bg-blue-500  w-[120px]  h-[130px] hover:opacity-85 '
                                alt="red t-shirt"
                                // sizes="25vh"
                                // fill
                                height="0"
                                width="900"
                                src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_03.png?v=1733810921" />
                        </div>



                    </div>
                </div>

                {/* TEXT SECTION */}


                <div className='flex flex-col gap-6'>
                    <p className='text-gray-500 text-[14px] flex font-thin'>
                        <Link href="/"> Home</Link>
                        <p className='ml-4 mr-4 '>/</p>
                        Slim-fit Formal Suit Blazer
                    </p>

                    <p className='text-zinc-900 text-[40px] font-sans font-semibold '>Slim-Fit Formal Suit Blazer</p>

                    <p className='text-zinc-900 text-[16px] font-sans'>$534.00</p>


                    <p className='text-gray-500 text-[12px] font-sans'>Tax included.</p>

                    <div className='flex'>
                        <p className='text-zinc-600 font-semibold'>Vendor: </p>
                        <p className='text-gray-500 font-sans ml-1'> Fashion</p>
                    </div>


                    <div className='flex flex-col text-gray-500 text-[14px] gap-1 font-thin'>
                        <p>Only 33 Items In Stock!</p>


                        <div className=' bg-zinc-100 h-[4.9px] w-[672px]'>
                            <div className='bg-red-600 h-[4.9px] w-[400px] '></div>

                        </div>

                    </div>

                    {/* colours */}
                    <div className='flex flex-col  gap-2'>

                        <div className='flex font-[15px]'>
                            <p className='text-zinc-600 font-semibold'>Color: </p>
                            <p className='text-gray-500 font-sans ml-1'> Rose gold</p>
                        </div>


                        <div className='flex gap-2'>
                            <div className='rounded-full hover:bg-black bg-gray-900 w-[50px] h-[50px] bg-opacity-20 flex justify-center items-center'>

                                <div className='rounded-full bg-white w-[45px] h-[45px]  flex justify-center items-center'>
                                    <div className='rounded-full w-[35px] h-[35px] bg-gray-600 '> </div>
                                </div>

                            </div>

                            <div className='rounded-full bg-gray-900 w-[50px] hover:bg-black h-[50px] bg-opacity-20 flex justify-center items-center'>

                                <div className='rounded-full bg-white w-[45px] h-[45px]  flex justify-center items-center'>
                                    <div className='rounded-full w-[35px] h-[35px] bg-amber-600 flex justify-center items-center '> </div>
                                </div>

                            </div>

                            <div className='rounded-full hover:bg-black bg-gray-900 w-[50px] h-[50px] bg-opacity-20 flex justify-center items-center'>

                                <div className='rounded-full bg-white w-[45px] h-[45px]  flex justify-center items-center'>
                                    <div className='rounded-full w-[35px] h-[35px] bg-pink-600 '> </div>
                                </div>

                            </div>




                        </div>


                    </div>


                    {/* size */}
                    <div className='flex flex-col gap-2'>
                        <div className='flex font-[15px]'>
                            <p className='text-zinc-600 font-semibold'>Size: </p>
                            <p className='text-gray-500 font-sans ml-1'> L</p>
                        </div>


                        <div className='flex gap-2'>
                            <p className='text-gray-500 border-gray-500 border-[1px] w-max py-2 px-4 transition-all duration-500 ease-in hover:bg-black hover:text-white'>XL</p>
                            <p className='text-gray-500 border-gray-500 border-[1px] w-max py-2 px-4 transition-all duration-500 ease-in hover:bg-black hover:text-white'>L</p>
                            <p className='text-gray-500 border-gray-500 border-[1px] w-max py-2 px-4 transition-all duration-500 ease-in hover:bg-black hover:text-white'>M</p>
                            <p className='text-gray-500 border-gray-500 border-[1px] w-max py-2 px-4 transition-all duration-500 ease-in hover:bg-black hover:text-white'>S</p>


                        </div>

                    </div>


                    {/* Quantty */}
                    <div className='flex flex-col gap-2'>

                        <p className='text-zinc-600 font-semibold'>Quantity</p>

                        <div className='flex  gap-5'>
                            {/* additions */}

                            <div className='text-gray-500 flex gap-8 border-gray-300 border-[1px] w-max py-[10.5px] px-4 font-bold'>
                                {<button onClick={decrease}>-</button>}
                                {<button>{Value}</button>}
                                {<button onClick={increase}>+</button>}
                            </div>


                            {/* add to cart */}
                            <div className='  text-black border-black border-[1px] flex justify-center items-center px-16 rounded-sm 
                             transition-all ease-in-out duration-500 hover:bg-black hover:text-white hover:translate-y-[-1px]'>
                                <p>Add To Cart</p>
                            </div>
                        </div>


                    </div>


                    {/* buy it */}

                    <div >
                        <p className='bg-black text-white rounded-md flex justify-center items-center w-[650px] py-[11px]
                         transition-all duration-100 ease hover:scale-105 '>Buy it Now</p>
                    </div>


                    {/* checkout */}

                    <div className=' flex flex-col gap-2'>
                        <p className='text-gray-500 text-[15px]'>Guaranteed safe checkout</p>


                        <div className='flex gap-2'>

                            <div className=' text-[28px] text-blue-800 border-gray-300 border-[1px] w-max py-[1px] px-2'>
                                <SiVisa />
                            </div>

                            <div className=' text-[28px] text-orange-500 border-gray-300 border-[1px] w-max py-[1px] px-2'>
                                <RiMastercardFill />
                            </div>

                            <div className=' text-[28px] text-blue-500 border-gray-300 border-[1px] w-max py-[1px] px-2'>
                                <FaCcAmex />
                            </div>

                            <div className=' text-[28px] text-blue-800 border-gray-300 border-[1px] w-max py-[1px] px-2'>
                                <FaPaypal />
                            </div>

                            <div className=' text-[28px] text-blue-500 border-gray-300 border-[1px] w-max py-[1px] px-2'>
                                <TbBrandBooking />
                            </div>

                            <div className=' text-[28px] text-orange-500 border-gray-300 border-[1px] w-max py-[1px] px-2'>
                                <FaCcDiscover />
                            </div>
                        </div>


                    </div>


                    {/* Size guide and details */}


                    <div>
                        <p className='text-black text-[20px] border-black border-b-[1px] w-max'>Size Guide</p>

                    </div>

                    {/* details */}

                    <div>
                        <div className='text-black flex gap-[500px] border-t-[1px] border-gray-300 border-b-[1px]  ' >

                            <div className='flex justify-center items-center gap-3 text-[25px] py-2'>
                                <IoEyeSharp className='text-[15px] text-zinc-700' />
                                Details
                            </div>

                            <div className='flex justify-center items-center text-gray-500'>
                                <IoIosArrowDown />
                            </div>

                        </div>
                    </div>



                    {/* Media */}

                    <div>
                        <div className='flex gap-2'>

                            <div className=' border-gray-500 border-[1px] w-max py-2 px-2 rounded-sm '>

                                <div className='flex gap-2 text-gray-500'>
                                    <FaFacebookF />
                                    <Link className='text-[14px] transition-all duration-500 ease-out hover:border-b-[1px] hover:border-gray-500' href="">Facebook</Link>
                                </div>

                            </div>
                            <div className=' border-gray-500 border-[1px] w-max py-2 px-2 rounded-sm '>

                                <div className='flex gap-2 text-gray-500'>
                                    <IoLogoTwitter />
                                    <Link className='text-[14px] transition-all duration-500 ease-out hover:border-b-[1px] hover:border-gray-500' href="">Twitter</Link>
                                </div>

                            </div>
                            <div className=' border-gray-500 border-[1px] w-max py-2 px-2 rounded-sm '>

                                <div className='flex gap-2 text-gray-500'>
                                    <RiPinterestFill />
                                    <Link className='text-[14px] transition-all duration-500 ease-out hover:border-b-[1px] hover:border-gray-500' href="">Pin it</Link>
                                </div>

                            </div>
                            <div className=' border-gray-500 border-[1px] w-max py-2 px-2 rounded-sm '>

                                <div className='flex gap-2 text-gray-500'>
                                    <PiUploadSimpleThin />
                                    <Link className='text-[14px] transition-all duration-500 ease-out hover:border-b-[1px] hover:border-gray-500' href="">Share more</Link>
                                </div>

                            </div>

                        </div>
                    </div>



                </div>
            </div>

            {/* CUSTOMERS REVIEWS */}


            <div className='bg-amber-50 h-[300px] w-full mt-[125px] flex justify-center items-center'>



                <div className='flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-zinc-800 text-[22px] font-semibold'>Customers Reviews</h1>


                    <div className='flex gap-48'>



                        <div className='flex flex-col gap-1' >
                            <div className='flex text-green-950 gap-2 text-[20px]' >
                                <IoIosStarOutline />
                                <IoIosStarOutline />
                                <IoIosStarOutline />
                                <IoIosStarOutline />
                                <IoIosStarOutline />
                            </div>

                            <p className='text-gray-500 text-[14px]  '> Be the first to write a review</p>
                        </div>



                        {/* write reviews */}


                        <div className='bg-green-800 opacity-80 text-white w-max py-2 px-14 rounded-sm hover:opacity-60'>
                            <Link href="" > Write a reviews </Link>
                        </div>




                    </div>

                </div>

            </div>


        </div>
    )
}

