const { login } = require('./login');
const { register } = require('./register');
const { logout } = require('./logout');
const { postStatistics } = require('./postStatistics');
const { getQuestions } = require('./getQuestions');
const { getThemes } = require('./getThemes');
const { getAnswers } = require('./getAnswers');

module.exports = {
  login,
  register,
  logout,
  postStatistics,
  getQuestions,
  getThemes,
  getAnswers,
};
