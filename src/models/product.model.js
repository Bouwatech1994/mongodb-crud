const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Svp Merci de saisir le name du Production"],
        default:0,
    },
    price:{
        type:Number,
        required:true,
        default:0,
    }, 
    qte:{
        type:Number,
        required:true,
        default:0,
    },
    image:{
        type:String,
        required:false,
        default:0,
    }
},{
    timestamps:true
});

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;