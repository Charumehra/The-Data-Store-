const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{String},
    email:{String, unique:true}
})

module.exports = mongoose.model('User', UserSchema)