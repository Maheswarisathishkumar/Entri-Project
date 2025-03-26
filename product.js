const express = require('express');
const router= express.Router();


const productController = require("../Controller/productsController");

router.get('/list', productController.getAllProducts);
router.get('/list/:id ', productController.getProductsById);
router.patch('/list:id', productController.updateProducts);
router.delete('/list', productController.deleteProducts);
router.get('/list:createProduct', productController.createProducts);



module.exports=router;

























// const express = require("express");

// const productController = require("./controller/productController");

// router.get("/",productController.getAllProducts);

// const router=express.Router();

// router.get("/",(req,res)=>{
//     res.send("Display All products Details!");
//  });

// router.get("/:id",(req,res)=>{
//     res.send("Display a Product!");
// });

// router.post("/",(req,res)=>{
//    res.send("Store a new products");
// });
// router.patch("/",(req,res)=>{
//     res.send("Update a product details!");
//  });

//  router.delete("/",(req,res)=>{
//     res.send("Delete a product details!");
//  });

// module.exports=router;