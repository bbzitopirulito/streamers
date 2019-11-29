const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    text: String,
    private: Boolean,
    date: Date,    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('Post', PostSchema);