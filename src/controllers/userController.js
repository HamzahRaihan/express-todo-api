const Users = require('../models/users');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
  const users = await Users.find();
  try {
    res.status(200).json({
      message: 'Get all users',
      data: users,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  try {
    const data = req.body;
    console.log('🚀 ~ file: userController.js:19 ~ login ~ data:', data);
    const user = await Users.findOne({ email: data.email });
    console.log('🚀 ~ file: userController.js:20 ~ login ~ user:', user);

    if (!user) {
      res.status(401).json({
        message: 'User not found',
      });
      return;
    }
    console.log(data.password, user.password);

    bcrypt
      .compare(data.password, user.password)
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: 'Login Succesfully',
          });
        } else {
          res.status(404).json({
            message: 'Login failed ( Wrong Password )',
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error.message);
  }
};

const register = async (req, res) => {
  try {
    const data = req.body;

    let saltRounds = 10;

    const hashPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(data.password, saltRounds, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });

    const newUser = {
      name: data.name,
      email: data.email,
      password: hashPassword,
    };
    const addUser = await Users.create(newUser);

    res.status(201).json({
      message: 'User has registered succesfully',
      addUser,
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { getAllUsers, register, login };
