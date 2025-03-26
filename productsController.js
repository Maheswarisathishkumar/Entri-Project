const products=require("../Model/productModel");

const createProducts=async(req, res)=>{
    try {

        console.log(req.body);
        const product =new product(req.body);
        const productList = await product.save();
        res.status(201).json(productList);
        
    } catch (error) {

        res.status(500).json({error});
        
    }
};



const getAllProducts =async(req, res)=>{
const productList = await products.find({});
res.status(200).json(productList);
};   
    
const getProductsById =async(req, res)=>{
const productList = await products.findByIdAndUpdate(req.params.id);
res.status(200).json(productList);
};

const updateProducts =async(req, res)=>{
const updatedList = await products.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.status(200).json(updatedList);
};

const deleteProducts =async(req, res)=>{
    const deletedList = await products.findByIdAnddelete(req.params.id);
    res.status(200).json(deletedList);

};

module.exports = {
    createProducts,
    getAllProducts,
    getProductsById,
    updateProducts,
    deleteProducts
};

















