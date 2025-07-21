const Comment = require('../models/Comment')
const ApiError = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const asyncHandler = require('../utils/AsyncHandler');

const createComment = asyncHandler(async(req,res)=>{

    const blogId = req.params;
    const userId = req.user._id;
    const {text} = req.body
    
    if(!text){
        throw new ApiError(400,'text is required');
        
    }

    const comment = await Comment.create ({

        blog : blogId,
        user : userId,
        text
    })
    return res.status(200).json(new ApiResponse(200,comment,'comment added successfully'))
})


module.exports = {createComment}