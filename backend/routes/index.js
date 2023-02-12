const express = require('express');

const router = express.Router();
const authRouter = require('./auth');
const statisticsRouter = require('./statistics');
const profileRouter = require('./profile');

router.use('/auth', authRouter);
router.use('/statistics', statisticsRouter);
router.use('/profile', profileRouter);
module.exports = router;
