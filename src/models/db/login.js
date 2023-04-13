const mongoose = require('mongoose');

const userloginSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  confirmpassword: {
    type: String,
    required: true,
    unique: true
  }
 
});

const usersignup = new mongoose.model('usersignup', userloginSchema);

module.exports=usersignup;