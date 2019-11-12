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
                private: false,
                friends: [],
                theme: 'light'
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
        const { username, password, platform } = req.body;        
        const { user_id } = req.headers;
        const { filename } = req.file;

        const usedUsername = await User.findOne( {_id: {$ne: user_id}} ).where('username').equals(username);
        const usedPassword = await User.findOne( {_id: {$ne: user_id}} ).where('password').equals(password);
        
        if(usedUsername === null && usedPassword === null) {                    
            await User.updateOne({_id:user_id}, {
                $set: { username, password, platform, profilepic: filename }
            });               
            console.log('entrou');
            const user = await User.findById(user_id);
            
            return res.json(user);            
        } else {
            return res.json('Username or password already used by another user.')
        }        
    },

    async delete(req, res) {
        const { user_id } = req.headers;        

        await User.deleteOne().where('_id').equals(user_id).then(() => {
            return res.json('deleted');
        });                
    },

    async setPreferences(req, res) {
        const { user_id, theme, private } = req.body;

        await User.updateOne({ _id: user_id }, {
            $set: { theme, private }
        });

        const user = await User.findOne().where('_id').equals(user_id);
        return res.json(user);
    }
};