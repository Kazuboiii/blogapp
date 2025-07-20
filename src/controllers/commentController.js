
const asyncHandler = require('../utils/AsyncHandler');

const createComment = asyncHandler(async(req,res)=>{

    const{id} = req.params;

    const userId = req.user._id;
})

module.exports = {createComment}