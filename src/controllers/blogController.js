const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/AsyncHandler');
const  ApiError  = require ('../utils/ApiError')
const { ApiResponse } = require('../utils/ApiResponse')
const Blog = require ('../models/Blog')


const createBlog =( async (req, res) => {
    const{title,content,author} = req.body;
    if(!title || !content || !author)
        {
            throw new ApiError(400,'Title,content and author are required'); 
        }
    const imageUrls = req.files?.map((file) => file.path)

    const blog = await Blog.create({
        title,
        content,
        author,
        images : imageUrls
    })
    return res.status(201).json(new ApiResponse(201,blog,'New blog created successfully '))
})

const getAllBlogs = asyncHandler(async(req,res)=>{
    const blogs = await Blog.find()

    if(!blogs){
        throw new ApiError(404,"No blogs found");
        
    }

    res.status(200).json(new ApiResponse(200,blogs,'Blogs fetched successfully'))
})

const getSingleBlogById = asyncHandler(async(req,res)=>{

    const{ id } = req.params;

    const blog = await Blog.findById(id)

    if(!blog){
        throw new ApiError(400,'Blog not found');
        
    }
    return res.status(200).json(new ApiResponse (200, blog,'Blog found' ))

})

const updateBlog = asyncHandler(async(req,res)=>{

    const {id} = req.params;

    const {author, title, content} = req.body;
    const blog = await Blog.findByIdAndUpdate(id,{
        author,
        title,
        content
    })
    return res.status(201).json(new ApiResponse(200,blog,'Blog was successfully uploaded'))
})

const deleteBlog = asyncHandler(async(req,res)=>{

    const{id} = req.params;

    const deletedBlog = await Blog.findByIdAndDelete(id);
    if(!deletedBlog){
        throw new ApiError(400,'Blog not found');
        
    }
    return res.status(200).json(new ApiResponse(200, 'Blog Deleted'))
})

module.exports = {createBlog,getAllBlogs,getSingleBlogById,deleteBlog,updateBlog}