const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Announcements = mongoose.model('announcements', new Schema({
    user_id: {
        type: String,
        required: true,
        ref: 'users'
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    pricing: {
        type: Number,
        required: true,
    },

    date_register: {
        type: Date,
        default: Date.now()
    }
}));

module.exports = Announcements;

