const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
    private: Boolean,
    date: Date,    
});

module.exports = mongoose.model('Post', PostSchema);