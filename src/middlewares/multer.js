const multer = require('multer');
const {v2 : cloudinary} = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');


const dotenv = require('dotenv');
dotenv.config();

cloudinary.config ({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET

})
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'blogapp',
        format : async (req, file) => {
            const extension = file.originalname.split('.').pop()
            return fileExtension === 'jpg' || fileExtension === 'jpeg'?
            jpg : fileExtension 
        },
        public_id: (req, file) => file.fileoriginalname.split('.')[0]
    }
})

const upload = multer({ storage})
module.exports = upload;