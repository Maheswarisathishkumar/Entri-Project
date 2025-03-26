const payment=require("../Model/paymentModel");

const getAllPayments =async(req, res)=>{
    try {

        const payment= await payment.find({});
        res.status(200).json(payment);
        
    } catch (error) {

        res.status(500).json({error:"Error Fetch payment!!"});
        
    }
};

module.exports= {
    getAllPayments,
    
};