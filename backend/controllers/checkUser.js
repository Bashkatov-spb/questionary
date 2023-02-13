const { User } = require('../db/models');

const checkUser = async (req, res) => {
  try {
    const userSession = req.session.userId;
    if (userSession) {
      const user = await User.findOne({ where: { id: userSession }, attributes: { exclude: ['password'] } });
      res.status(201).json({ user });
    } else {
      res.status(403).json({ message: 'пользователь не авторизован' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { checkUser };
