const jsonwebtoken = require('jsonwebtoken');
const dotenv = require('dotenv')


const generateToken = (id) => {
    return JsonWebTokenError.sign({id},process.env.JWT_SECRET,{
    expiresIn: '30d'
    })
}

    module.exports = {generateToken};   