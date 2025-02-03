import productModel from "@/model/products"
import { connectDb } from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET=async(req,{params})=>{
try{
    await connectDb()
    const id= (params?.id)
    if(!id)  return new NextResponse(JSON.stringify({msg:"no product found"}), {status:404});

    const prod=await productModel.findById(id)
    if(!prod){
         
        return new NextResponse(JSON.stringify({msg:"no product found"}), {status:404});
    }

    return new NextResponse(JSON.stringify(prod), {status:200})
}
catch(err){
    console.log(err.message)
    return new NextResponse(JSON.stringify({msg:"Product not found"}), {status:500})
}
}

