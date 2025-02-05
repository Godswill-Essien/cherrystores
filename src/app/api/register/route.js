import adminModel from "@/model/admin"
import { connectDb } from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export const POST=async(req)=>{
    try{
      

        // take incoming values
        const  {email,password}=await req.json()
   await connectDb()
   //    if admin exists let me know
    const adminExists=await adminModel.findOne({email:email})
    if(adminExists){
        return NextResponse.json({msg:"amdin already exists, try another email address"}, {status:400})

    }
    else{
        // regsiter an admin
        const salt=bcrypt.genSaltSync(10)
        // hash your password
        const hashedPassword=bcrypt.hashSync(password,salt)
    
        const newAdmin=await adminModel.create({email, password:hashedPassword})
        if(newAdmin)return NextResponse.json({msg:"admin created successfully"} ,{status:201})
        
        }

    }
    catch(error){
        console.log("Somethinfg went wrong", error)
        return NextResponse.json({msg:"Server Error"}, {status:500})
    }

    
}