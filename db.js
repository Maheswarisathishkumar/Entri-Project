const mongoose = require("mongoose");
const URL = "mongodb://customer:customer@cluster0-shard-00-00.6i4is.mongodb.net:27017,cluster0-shard-00-01.6i4is.mongodb.net:27017,cluster0-shard-00-02.6i4is.mongodb.net:27017/mdb-e-commerce-application?ssl=true&replicaSet=atlas-jinmkx-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async()=>{
    try {
        await  mongoose.connect(URL);
        console.log("Database Connected Successfully");
} catch (error) {
        console.log(error);
        
    }
};
module.exports = connectDB;