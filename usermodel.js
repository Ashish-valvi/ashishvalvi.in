const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName: {type : String , required: [true, 'your name is important for use']} ,
    lastName: {type : String , required: [true, 'lastName is nessesory']} ,
    email: {type : String , unique: true , required: [true, 'email is important to fill']} ,
    contry:{type : String ,required: [true, 'Your nationality is important for us']},
    mobileNumber: {
        type: Number , required: [true, 'mobile number is nessesory']
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;