const { User } = require('../db/models');

const getProfile = async (req, res) => {
  try {
    const userSession = req.session.userId;
    const { avatar } = await User.findOne({ where: { id: userSession }, attributes: ['avatar'] });
  
    res.status(201).json({ avatar });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getProfile };
