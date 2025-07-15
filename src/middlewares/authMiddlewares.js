
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const asyncHandler = require ('../utils/AsyncHandler.js');

const protect =asyncHandler(async(req,res,next)=>{
    let token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startswith("Bearer")
    ){
        try{
            token = req.headers.authorization.split("")[1];
            //decode token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //get user from the token
            req.user = await User.findById(decoded.id).select("-password");
            next();
        }
        catch(error){
            res.status(401);
            throw new Error("Not authorized,token failed");
            
        }
        
    }
    if (!token){
        res.status(401)
        throw new Error("Not authorized, no token ");
        
    }
})

module.exports = protect