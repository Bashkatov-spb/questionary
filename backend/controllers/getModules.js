const { Module } = require('../db/models');

const getModules = async (req, res) => {
  try {
    const modules = await Module.findAll({ attributes: { exclude: ['createdAt', 'updateAt'] } });
    res.json(modules);
  } catch ({ message }) {
    res.json(message);
  }
};

module.exports = { getModules };
