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

const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id).select('name email').exec();

    if (!user) {
      return res.status(404).json({
        message: 'User with id ' + id + ' not found',
      });
    }

    res.status(200).json({
      message: 'Get user with id ' + id,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
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

const editUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await Users.findOne({ _id: id });
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

    const editedUser = {
      name: data.name,
      email: data.email,
      password: hashPassword,
    };
    const edited = await user.updateOne(editedUser);

    res.status(201).json({
      message: 'User has succesfully made a change',
      edited,
    });
  } catch (error) {
    res.status(404).json({
      message: 'Internal Error',
    });
  }
};

module.exports = { getAllUsers, getUserByID, register, editUser };
