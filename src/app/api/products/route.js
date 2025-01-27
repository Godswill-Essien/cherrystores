import { connectDb } from "@/utils/connect";
import { NextResponse } from "next/server";

const result=
  [
      {
        "id": "1",
        "productName": "shirt",
        "desc": "Tune up your fasion withh the new amiri leaether jacket",
        "image_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": "300000",
        "category": "Men",
        "color": "white",
        "created_at": "0000-00-00 00:00:00"
      },

      {
        "id": "2",
        "productName": "fllufy",
        "desc": "swagger up with the new style",
        "image_url": "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        "price": "30",
        "category": "women",
        "color": "grey",
        "created_at": "0000-00-00 00:00:00"
      },
      {
        "id": "5",
        "productName": "flip flop",
        "desc": "swagger up with the new style",
        "image_url": "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        "price": "30",
        "category": "women",
        "color": "grey",
        "created_at": "0000-00-00 00:00:00"
      },
      {
        "id": "3",
        "productName": "cap",
        "desc": "swagger up with the new style",
        "image_url": "https://plus.unsplash.com/premium_photo-1708110920881-635419c3411f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        "price": "30",
        "category": "women",
        "color": "grey",
        "created_at": "0000-00-00 00:00:00"
      },
      {
        "id": "4",
        "productName": "hat",
        "desc": "swagger up with the new style",
        "image_url": "https://plus.unsplash.com/premium_photo-1695575576052-7c271876b075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        "price": "30",
        "category": "women",
        "color": "grey",
        "created_at": "0000-00-00 00:00:00"
      },
      
    ]
  

export const GET= async (req)=>{
   await connectDb()
   return new NextResponse(JSON.stringify({"result":result}), {status:200})
}