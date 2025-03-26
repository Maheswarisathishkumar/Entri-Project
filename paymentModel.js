const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const payment = new Schema({

    
    productid:{
        type:Object,
    },
    
    paymenttype:{
        type:Object,
    },

    Amount:{
        type:Number,
    }


});
module.exports = ("payment",payment);