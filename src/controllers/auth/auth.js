const Users = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv/config');

const login = async (req, res) => {
  try {
    const data = req.body;
    const user = await Users.findOne({ email: data.email });

    if (!user) {
      res.status(401).json({
        message: 'User not found',
      });
      return;
    }

    bcrypt
      .compare(data.password, user.password)
      .then((result) => {
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              id: user._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: '1h',
            }
          );

          res.status(200).json({
            message: 'Login Succesfully',
            token,
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

module.exports = login;
