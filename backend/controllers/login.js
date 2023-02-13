const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const login = async (req, res) => {
  const {
    email, password,
  } = req.body;

  try {
    if (email || password) {
      const user = await User.findOne({ where: { email } });
      if (user && await bcrypt.compare(password, user.password)) {
        const newUser = {
          id: user.id, name: user.name, email: user.email, avatar: user.avatar,
        };
        req.session.userId = newUser.id;
        res.status(201).json({ user: newUser });
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
