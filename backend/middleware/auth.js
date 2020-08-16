const dotenv = require('dotenv'),
  jwt = require('jsonwebtoken');

dotenv.config();

exports.loginRequired = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.APP_SECRET, function (err, decoded) {
      if (decoded) {
        return next();
      } else {
        return next({
          status: 401,
          message: 'Please log in first.',
        });
      }
    });
  } catch (err) {
    return next({
      status: 401,
      message: 'Please log in first.',
    });
  }
};

exports.ensureCorrectUser = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.APP_SECRET, function (err, decoded) {
      console.log("decoded: ", decoded);
      console.log("decoded.id: ", decoded.id);
      console.log("req.params.id: ", req.params.id);
      if (decoded && decoded.id === req.params.id) {
        return next();
      } else {
        return next({
          status: 401,
          message: 'Unauthorized.',
        });
      }
    });
  } catch (err) {
    return next({
      status: 401,
      message: 'Unauthorized.',
    });
  };
};
