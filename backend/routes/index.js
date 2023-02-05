const express = require('express');

const router = express.Router();
const authRouter = require('./auth');
const statisticsRouter = require('./statistics');

router.use('/auth', authRouter);
router.use('/statistics', statisticsRouter);
module.exports = router;
