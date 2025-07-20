const express = require ('express')
const { createBlog, getAllBlogs } = require ('../controllers/blogController')
const {protect, authorizeRoles} = require ('../middlewares/authMiddlewares')
const upload = require ('../middlewares/multer')

const router = express.Router()

router.post('/create',protect,authorizeRoles("admin"),upload.array('image',5), createBlog)
router.get('/get-blogs',protect,getAllBlogs);

module.exports = router;