const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    require: [true, 'Username is required'],
  },
  email: {
    type: String,
    unique: [true, 'Email is already exist'],
    require: [true, 'Email is required'],
  },
  password: {
    type: String,
    min: [8, 'Password is too short'],
  },
  image: { type: String },
});

const User = model('User', UserSchema);

module.exports = User;
