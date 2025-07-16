const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const app = express();
app.use(express.json())


dotenv.config()
const port = process.env.port 

connectDB()

app.use('/api/users',require('./src/routes/userRoutes'))


app.listen(port, () => {
    console.log(`We are Connected ${port}`)
})
