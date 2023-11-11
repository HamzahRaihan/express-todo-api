const jwt = require('jsonwebtoken');

const authChecker = (req, res, next) => {
  try {
    const auth = req.headers.authorization;

    if (!auth?.startsWith('Bearer')) {
      return res.status(404).json({
        message: 'You need to specify the authorization',
      });
    }

    const jwtToken = auth.split(' ')[1];

    jwt.verify(jwtToken, process.env.JWT_KEY, function (err, decoded) {
      if (err) {
        return res.status(404).json({
          message: 'Wrong credential',
        });
      }

      res.credentials = decoded;
      next();
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

module.exports = authChecker;
