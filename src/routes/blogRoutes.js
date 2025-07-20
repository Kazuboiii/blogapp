const express = require ('express')
const { createBlog, getAllBlogs, getSingleBlogById, deleteBlog ,updateBlog } = require ('../controllers/blogController')
const {protect, authorizeRoles} = require ('../middlewares/authMiddlewares')
const upload = require ('../middlewares/multer')

const router = express.Router()

router.post('/create',protect,authorizeRoles("admin"),upload.array('images',5), createBlog)
router.get('/get-blogs',protect,getAllBlogs);
router.get('/get-blog/:id',protect,getSingleBlogById)
router.get('/deleteblog/:id',protect,authorizeRoles('admin'),deleteBlog)
router.patch('/updateBlog',protect,authorizeRoles('admin'),updateBlog)

module.exports = router;