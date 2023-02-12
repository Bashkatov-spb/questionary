const { User } = require('../db/models');
const upload = require('../config/fileUploadSave');

const putAvatar = async (req, res) => {
  const file = req.files.homesImg;

  try {
    const url = await upload(file);
    const userSession = req.session.userId;

    const user = await User.findOne({ where: { id: userSession } });
    user.avatar = url;
    user.save();

    res.status(201).json(user.avatar);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { putAvatar };
