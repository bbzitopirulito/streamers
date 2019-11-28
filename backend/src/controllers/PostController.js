const Post = require('../models/Post');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { text, private, date } = req.body;
        const { user_id } = req.headers;
        
        let post = await Post.create({
            user: user_id,
            text: text,
            private: private,
            date: date
        })
        await User.updateOne({_id:user_id}, {
            $push: { "posts":post._id }
        })
        return res.json(post);        
    }
}