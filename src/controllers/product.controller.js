const Product = require("../models/product.model");

const createProducts = async (req,res)=>{
    try {
       const product = await Product.create(req.body);
       res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:error.message,
            code:500,
        });
    }
}

const  getProducts = async (req,res)=>{
    try {
       const products = await Product.find({});
       res.status(200).json(products);
    } catch (error) {
         
        res.status(500).json({
            msg:error.message,
            code:500,
        });
    }
}

const findProducts = async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
       res.status(200).json(product);
    } catch (error) {
         
        res.status(500).json({
            msg:error.message,
            code:500,
        });
    }
}

const updateProducts = async (req,res)=>{

    try {
        const {id} = req.params;
        const productUpdate = await Product.findByIdAndUpdate(id,req.body);
        if(!productUpdate){
            res.status(500).json({
                msg:"Product Not fund.",
                code:500,
            });
        }
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
         
        res.status(500).json({
            msg:error.message,
            code:500,
        });
    }
}

const deleteProducts = async (req,res)=>{

    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(500).json({
                msg:"Product Not fund.",
                code:500,
            });
        }
        res.status(200).json(product);
    } catch (error) {
         
        res.status(500).json({
            msg:error.message,
            code:500,
        });
    }
}

module.exports = {
    getProducts,
    createProducts,
    findProducts,
    updateProducts,
    deleteProducts
}