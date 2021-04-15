
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    phoneNo: Number,
    password: String

})


const userCridentials = new mongoose.model('userCridentials', userSchema);

module.exports = userCridentials;