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
    email: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    account_date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)