const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cart = new Schema({

    
    customerid:{
        type:Object,
    },
    
    items:{
        type:Object,
    },

    updatedate:{
        type:Date,
    }


});
module.exports = ("cart",cart);