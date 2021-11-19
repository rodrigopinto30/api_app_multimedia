const mongoose = require('mongoose');

const stickerSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Sticker', stickerSchema);