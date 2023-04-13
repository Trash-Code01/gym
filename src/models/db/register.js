const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
   
  },
  number: {
    type: Number,
    required: true,
    unique:true
  },
  msg: {
    type: String,
    required: true
  }
});

const Userdetail = new mongoose.model('User', userSchema);

module.exports = Userdetail;
