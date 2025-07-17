const User = require('../models/User')
const ApiError = require('../utils/ApiError')
const asyncHandler = require('../utils/AsyncHandler')
const {ApiResponse} = require('../utils/ApiResponse')
const { generateToken }  = require('../config/generateToken')

const registerUser =  (async(req,res) => {

    //get name and email
    // checks if user with the email already exists or not
    // if user already exists throw error
    // if not create a new user
    const {name, email} = req.body;
    if(!name || !email){
        throw new ApiError(404,"Name and Email is required");
        
    }

    const userExists = await User.findOne({ email })
    if (userExists){
        throw new ApiError(404,"User with this email already exists");
        
    }

    const user = await User.create({
        name,
        email
    })

    return res.status(200).json(new ApiResponse(200,user,'User created successfully'))
})


const loginUser = asyncHandler(async (req,res) =>{

    const{name,email}= req.body;

    const user = await User.findOne({ email })
    if(!user){
        throw new ApiError(404,"User with this email does not exist");
    }
    if(user.name !== name){
        throw new ApiError(404,"Name does not match with the email");
    }

    const token = generateToken(user._id);

    return res.status(200).json(new ApiResponse(200,{ user,token },'User logged in successfully'))



})
module.exports = {registerUser , loginUser}