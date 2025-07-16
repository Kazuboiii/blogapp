const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type : String,
        required: true,
        unique: true
    },
    roles:{
        type: String,
        enum: ['admin', 'user'],
        enum: ['admin', 'user'],
        default: 'user'
    }
})

module.exports = mongoose.model('User', userSchema);