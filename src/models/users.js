const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    unique: [true, 'Email is already exist'],
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    min: [8, 'Password is too short'],
    required: true,
  },
  // image: { type: String },
});

const Users = model('Users', UserSchema);

module.exports = Users;
