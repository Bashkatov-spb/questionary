const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const register = async (req, res) => {
  const {
    name, email, password, password2,
  } = req.body;

  try {
    if (name || email || password || password2) {
      if (password.length > 3 || password2.length > 3) {
        let user = await User.findOne({ where: { email } });
        if (!user) {
          if (password === password2) {
            const hash = await bcrypt.hash(password, 10);
            const newUser = await User.create({ name, email, password: hash });
            user = {
              id: newUser.id, name: newUser.name, email: newUser.email, avatar: newUser.avatar,
            };
            req.session.user = user.id;
            res.status(201).json(user);
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
