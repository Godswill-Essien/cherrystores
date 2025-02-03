import productModel from "@/model/products"
import { connectDb } from "@/utils/connect"
import { NextResponse } from "next/server"

export const POST=async (res)=>{

    try{
        // get incoming data
        const {product,price,category,desc,productUrl,instock} =await res.json()
        // call database connection
        await connectDb()
        
        // insert product details in database
        const newProduct=new productModel({productName:product, price,category, desc, productUrl, inStock:instock})
        await newProduct.save()
        
        if(!newProduct){
            return new NextResponse(JSON.stringify("Product not added"), {status:500})
        }
        return new NextResponse(JSON.stringify("Product added succesfully"), {status:201})
    }

    catch(err){
        console.error(err)
        return new NextResponse(JSON.stringify("Server Error"), {status:500})
        
    }

}