const cart=require("../Model/cartModel");

const getCartItems =async(req, res)=>{
    try {

        const cartItem = await cart.find({});
        res.status(200).json(cartItem);
        
    } catch (error) {

        res.status(500).json({error:"Fetching Error Item to cart"});
        
    }
};


const updateCart =async(req, res)=>{
    try {

        const updateCart = await cart.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (!updateCart) {
            
            return res.status(404).json({error:"Cart not found!"})
        }
        res.status(200).json(updateCart);
        
    } catch (error) {

        res.status(500).json({error:"OO! Error updating in the cart!"});
        
    }
};

module.exports= {
    getCartItems,
    updateCart,
};

