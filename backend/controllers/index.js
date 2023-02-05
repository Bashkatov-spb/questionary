const { login } = require('./login');
const { register } = require('./register');
const { logout } = require('./logout');
const { postStatistics } = require('./postStatistics');

module.exports = {
  login,
  register,
  logout,
  postStatistics,
};
