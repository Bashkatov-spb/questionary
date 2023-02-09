const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const login = async (req, res) => {
  const {
    email, password,
  } = req.body;

  try {
    if (email || password) {
      let user = await User.findOne({ where: { email } });
      if (user && await bcrypt.compare(password, user.password)) {
        user = {
          id: user.id, name: user.name, email: user.email, avatar: user.avatar,
        };
        req.session.user = user.id;
        res.status(201).json(user);
      } else {
        res.status(403).json({ message: 'Ваш email пароль не соответствуют' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { login };
