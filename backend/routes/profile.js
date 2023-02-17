const express = require('express');

const router = express.Router();
const { getProfile } = require('../controllers/getProfile');
const { putAvatar } = require('../controllers/putAvatar');

router.get('/', getProfile);
router.put('/avatar', putAvatar);

module.exports = router;
