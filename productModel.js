const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const products = new Schema({
    name:{
        type:String,
    },

    description:{
        type:String,
    },

    price:{
        type:Number,
    },
    
    category:{
        type:String,
    },

    rating:{
        type:Number,
    },
    stock:{
        type:Number,
    }


});
module.exports = ("products",products);