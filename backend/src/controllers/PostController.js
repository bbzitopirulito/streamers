const Post = require('../models/Post');
const User = require('../models/User');

module.exports = {
    async store(req, res) {        
        const { user_id } = req.headers;
        const { text, private } = req.body;

        let date = new Date();
        
        date.setHours(date.getHours() - 3)
        
        let post = await Post.create({
            user: user_id,
            text,
            private,
            date,
        })
        await User.updateOne({_id:user_id}, {
            $push: { "posts":post._id }
        })
        return res.json(post);        
    }
}