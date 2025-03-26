
const customers= require("../Model/customerModel");




const createCustomers=async(req, res)=>{
    try {

        console.log(req.body);
        const customers =new customers(req.body);
        const customerList = await customers.save();
        res.status(201).json(customerList);
        
    } catch (error) {

        res.status(400).json({error});
        
    }
};



const getAllCustomers =async(req, res)=>{
const customerList = await customers.findById({});
res.status(200).json(customerList);
};   
    
const getCustomersById =async(req, res)=>{
const customerList = await customers.findByIdAndUpdate(req.params.id);
res.status(200).json(userList);
};

const updateCustomers =async(req, res)=>{
const customerList = await customers.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.status(200).json(customerList);
};

const deleteCustomer =async(req, res)=>{
    const customerList = await customers.findByIdAnddelete(req.params.id);
    res.status(200).json(customerList);

};

module.exports={

    
    createCustomers,
    getAllCustomers,
    getCustomersById,
    updateCustomers,
    deleteCustomer

};