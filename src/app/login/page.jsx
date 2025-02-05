"use client"
import axios from 'axios'
import React, { useState } from 'react'
import {signIn} from "next-auth/react"
export default function Login() {

    const [info, setInfo] = useState({ email: "", password: "" })
    const[error,setError]=useState('')
    const handleInput = (e) => {
        
        setInfo((prev)=>({...prev, [e.target.name]:e.target.value}))
        console.log(info)
    }

    const handleSubmit= async (e)=>{
        // preventDefault
        e.preventDefault()
        console.log(e)

        if(!info.email || !info.password){
            setError("Please fill in all credentials")
        }   
        else{
            try{
                    // call the nextauths signIN
                    // we will set redirect to false so the sign in won't redirect us
                    const res=await signIn("credentials",{email:info.email,password:info.password,redirect:false})
                    console.log(res)
            }
            catch(e){
                console.log("error", error)
                throw new Error("somethin went wrong")
            }
        }
    }
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col shadow-lg ring-2 ring-teal-100" >
            <form action="" onSubmit={handleSubmit}>


                <h1>Admin login</h1>

                {error && <p className='bg-red-600 text-white p-3 rounded-md'>{error}</p>}
                <div className="mt-5" >
                    <label htmlFor="email" className="text-xl">Email</label>
                    <input name="email" className="border-black border w-full rounded-sm" type="text"  onChange={(e) => handleInput(e)} />
                </div>
                <div className="mt-5">
                    <label htmlFor="password" className="text-xl">password</label>
                    <input name="password" className="border-black border w-full rounded-sm" type="text"  onChange={(e) => handleInput(e)} />
                </div>

                <button className='w-max bg-green-600 mt-5 text-white text-center rounded-md px-8 py-3'>Login</button>

            </form>
        </div>
    )
}
