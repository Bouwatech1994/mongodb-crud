const express = require('express')
const mongoose = require('mongoose');

//load .env
require('dotenv').config();


// load routers
const productsRouter = require("./src/routes/product.route");


const SERVER_PORT = 3000;
const app = express();

// midleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use('/api/products',productsRouter)

//base route
app.get("/",(req,res)=>{
    res.send("API V 1.0.0");
});

mongoose.connect(process.env.MONGODB_CONNEXION)
.then(()=>{
    console.log("Database Connnected success");
    app.listen(SERVER_PORT,()=>{
        console.log(`Server is runing on http://localhost:${SERVER_PORT}`);
    });
}).catch(()=>{
    console.log("Connexion fail");
})