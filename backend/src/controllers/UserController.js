const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email, username, password, platform } = req.body;

        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({ 
                email,
                username,
                password,
                platform,
            })
            return res.json(user);
        }        
        return res.json("exists");

    },

    async showById(req, res) {
        const { user_id } = req.headers;

        const user = await User.findById(user_id);        

        return res.json(user);
    },

    async getUser(req, res) {
        const { email, password } = req.headers;

        const user = await User.findOne().where('email').equals(email).where('password').equals(password);

        if(!user) {
            return [];
        }        

        return res.json(user);
    },

    async update(req, res) {
        const { user_id, newusername, newpassword, newplatform } = req.headers;

        await User.updateOne({_id:user_id}, {
            $set: { username: newusername, password: newpassword, platform: newplatform }
        })       
        const user = await User.findById(user_id);
        return res.json(user);
    }
};