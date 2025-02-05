"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Register() {
    const router = useRouter()

    const [info, setInfo] = useState({ email: "", password: "" })
    const [error, setError] = useState('')
    const handleInput = (e) => {

        setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    console.log(info)

    const handleSubmit = async (e) => {
        // preventDefault
        e.preventDefault()
        console.log(e)

        if (!info.email || !info.password) {
            setError("Please fill in all credentials")
        }
        else {
            try {
                setError('')
                const res = await axios.post('api/register', {
                    password: info.password,
                    email: info.email
                })
                if (res.ok) {
                    const form = e.target;
                    form.reset()
                    router.push('/login')
                }
                else {
                    // show error message
                    const errData = await res.json();
                    setError(errData.message)
                    console.log(err)

                }

            }
            catch (e) {
                console.log("error", error)
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
                    <input name="email" className="border-black border w-full rounded-sm" type="text" onChange={(e) => handleInput(e)} />
                </div>
                <div className="mt-5">
                    <label htmlFor="password" className="text-xl">password</label>
                    <input name="password" className="border-black border w-full rounded-sm" type="text" onChange={(e) => handleInput(e)} />
                </div>

                <button className='w-max bg-green-600 mt-5 text-white text-center rounded-md px-8 py-3'>Register</button>

            </form>
        </div>
    )
}
