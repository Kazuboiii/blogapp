const mongoose = require('mongoose');
const { strict } = require('once');

const userSchema = new mongoose.Schema({
    name:{
        type: string,
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
        default: 'user'
    }
})

module.exports = mongoose.model('User', userSchema);