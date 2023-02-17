const { Theme } = require('../db/models');

const getThemes = async (req, res) => {
  try {
    const themes = await Theme.findAll({ attributes: { exclude: ['createdAt', 'updateAt'] } });
    res.json(themes);
  } catch ({ message }) {
    res.json(message);
  }
};

module.exports = { getThemes };
