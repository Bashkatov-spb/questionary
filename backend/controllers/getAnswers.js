const { Answer } = require('../db/models');

const getAnswers = async (req, res) => {
  try {
    const answers = await Answer.findAll({ attributes: { exclude: ['createdAt', 'updateAt'] } });
    res.json(answers);
  } catch ({ message }) {
    res.json(message);
  }
};

module.exports = { getAnswers };
