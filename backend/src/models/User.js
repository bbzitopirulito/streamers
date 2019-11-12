const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    platform:String,
    profilepic:String,
    private:Boolean,
    friends:[String],
    theme:String,   
}, {
    toJSON: {
        virtuals: true,
    }
});

UserSchema.virtual('profilepic_url').get(function() {
    return `http://localhost:3333/files/${this.profilepic}`
});

module.exports = mongoose.model('User', UserSchema);