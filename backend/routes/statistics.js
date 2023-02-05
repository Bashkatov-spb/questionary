const express = require('express');

const router = express.Router();
const { postStatistics } = require('../controllers/postStatistics');

router.post('/', postStatistics);

module.exports = router;
