const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const register = async (req, res) => {
  const {
    name, email, password, password2,
  } = req.body;

  try {
    if (name || email || password || password2) {
      if (password.length > 3 || password2.length > 3) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          if (password === password2) {
            const hash = await bcrypt.hash(password, 10);
            let newUser = await User.create({ name, email, password: hash });
            newUser = {
              id: newUser.id, name: newUser.name, email: newUser.email, avatar: newUser.avatar,
            };
            req.session.userId = newUser.id;
            res.status(201).json({ user: newUser });
          } else {
            res.status(403).json({ message: 'Ваши пароли не совпадают' });
          }
        } else {
          res.status(403).json({ message: 'Такой email уже существует' });
        }
      } else {
        res.status(403).json({ message: 'Пароль должен быть больше 3 символов' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { register };
