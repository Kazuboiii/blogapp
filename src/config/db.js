const mongoose = require ('mongoose')
const dotenv = require('dotenv');


dotenv.config()

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('ladies and gentlemen, We got `em ')
    }
    catch(error) {
        console.log('error' , error)

    }
}
module.exports = connectDB;  