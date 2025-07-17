const express = require ('express')
const { createBlog } = require ('../controllers/blogController')
const {protect} = require ('../middlewares/authMiddlewares')

const router = express.Router()

router.post('/create',protect, createBlog)

module.exports = router;