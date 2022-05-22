const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)

//user
//username, age, password, name,