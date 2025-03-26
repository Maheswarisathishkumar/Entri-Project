const order=require("../Model/orderModel");

const getAllOrders =async(req, res)=>{
    try {

        const orderList= await order.find({});
        res.status(200).json(orderList);
        
    } catch (error) {

        res.status(404).json({error:"Orders Not Found"});
        
    }
};

module.exports = {
    getAllOrders,
}