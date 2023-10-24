const mongoose =require("mongoose");
const dotenv =require("dotenv");
dotenv.config();
const url = process.env.DBURL; 
const connectDB = async () => {
    try {
        await mongoose.connect(url,{
            useNewUrlParser: true,
        })
        console.log("Database Connected")
    }
    catch(Error){
        console.log("Error :",Error);
    }
}

module.exports =connectDB;