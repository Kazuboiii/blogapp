const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const app = express();


dotenv.config()
const port = process.env.port 

connectDB()


app.listen(port, () => {
    console.log(`We are Connected ${port}`)
})
