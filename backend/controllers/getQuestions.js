const { Question } = require('../db/models');

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll({
      attributes: { exclude: ['createdAt', 'updateAt'] },
    });
    res.json(questions);
  } catch ({ message }) {
    res.json(message);
  }
};

module.exports = { getQuestions };
