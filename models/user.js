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
        required: false
    },
    login: {
        type: String,
        required: false
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