const mongoose = require('mongoose');

const User = mongoose.model('User', {
    username: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

module.exports = {
    User: User
}