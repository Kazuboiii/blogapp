const User = require('../models/User')
const {ApiError} = require('../utils/ApiError')
const asyncHandler = require('../utils/AsyncHandler')

const registerUser =  (async(req,res) => {

    //get name and email
    // checks if user with the email already exists or not
    // if user already exists throw error
    // if not create a new user
    const {name, email} = req.body;
    if(!name || !email){
        throw new ApiError(404,"Name and Email is required");
        
    }

    const userExists = await User.FindOne({ email })
    if (userExists){
        throw new ApiError(404,"User with this email already exists");
        
    }

    const user = await User.create({
        name,
        email
    })

    return res.status(200).json(new ApiResponse(200,user,'User created successfully'))
})
module.exports = {registerUser}