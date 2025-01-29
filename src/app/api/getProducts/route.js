import productModel from "@/model/products";
import { connectDb } from "@/utils/connect";
import { NextResponse } from "next/server";



export const GET= async (req)=>{
   await connectDb()
   const prod=await productModel.find()
  if(!prod)return new NextResponse(JSON.stringify({msg:"no product found"}), {status:200})
   return new NextResponse(JSON.stringify(prod), {status:200})
}