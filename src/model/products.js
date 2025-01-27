import mongoose from "mongoose"

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,

    },

    price:{
        type:Number,
        required:true,
        
        
    },
    category:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    productUrl:{
        type:String,
        required:true
    },
    inStock:{
        type:Number,
        required:true
    }
}, (timestamps))

const productModel=mongoose.models.product || mongoose.model('product', productSchema)

export default productModel