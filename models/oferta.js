const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        default: 'Toruń'
    },
    category: {
        type: String,
        required: true,
        default: 'praca'
    },
    owner_id: {
        type: String,
        required: true
    },
    oferta_date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Oferta', userSchema)