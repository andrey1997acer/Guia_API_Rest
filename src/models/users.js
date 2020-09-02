const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = mongoose.model('users', new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    date_register: {
        type: Date,
        default: Date.now()
    }
}));

module.exports = Users;





