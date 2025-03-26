const express = require ('express');
const app = express();
const PORT = 4000;


// const routes = require("../Backend/routes/customer");
// app.use("/",routes);



const customerRoutes = require("../Backend/Routes/customer");
const productRoutes = require('../Backend/routes/product');
const orderRoutes = require('../Backend/routes/order');
const cartRoutes = require('../Backend/routes/cart');
const paymentRoutes = require('../Backend/routes/payment');


app.use('/api/customer',customerRoutes);
app.use('/api/product',productRoutes);
app.use('/api/order',orderRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/payment',paymentRoutes);


const connectDB=require("../Backend/Configuration/db");
connectDB();



app.listen(PORT,()=>{
    console.log("Welcome to Masha Online Store!!");
    console.log(`Listening to http://localhost/${PORT}`)
});