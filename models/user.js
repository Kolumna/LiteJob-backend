const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    second_name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    user_id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    account_date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)