const express = require ('express')
const { createComment } = require ('../controllers/commentController')
const {protect, authorizeRoles} = require ('../middlewares/authMiddlewares')
const upload = require ('../middlewares/multer')

const router = express.Router()

router.post('/create/:id',protect, createComment) 

module.exports = router;