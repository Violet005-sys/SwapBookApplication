const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
       required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'fulfilled', 'deleted'],
        default: 'pending'
    },
    activity: {
        type: String,
        required: true,
        enum: ['Completed Reading', 'In progress', 'Not started'],
        default: 'Not started'
    }
})

module.exports = mongoose.model('Request', RequestSchema);