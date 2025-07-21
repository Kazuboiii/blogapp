const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const app = express();
app.use(express.json())


dotenv.config()
const port = process.env.port 

connectDB()

app.use('/api/users',require('./src/routes/userRoutes'))
app.use('/api/blogs',require('./src/routes/blogRoutes'))
app.use('/api/comments',require('./src/routes/commentRoutes'))


app.listen(port, () => {
    console.log(`We are Connected ${port}`)
})
