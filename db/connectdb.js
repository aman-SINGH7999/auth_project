const mongoose = require('mongoose')

const connectDB = async (dbUrl)=>{
    try{
        const DB_OPTIONS = {
            dbName : "blogdb",
        }
        await mongoose.connect(dbUrl,DB_OPTIONS);
        console.log('DB connected successfully');
    }catch(err){
        console.log("---------------------------",err);
    }
}
module.exports = connectDB;