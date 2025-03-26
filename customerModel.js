const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const customers = new Schema({

    name:{
        type:String,
    },


    email:{
        type:String,
    },
    
    address:{
        type:Object,
    },

    phonenumber:{
        type:Object,
    },

  

});

module.exports=mongoose.model('customers',customers);