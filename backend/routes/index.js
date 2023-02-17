const express = require('express');

const router = express.Router();
const authRouter = require('./auth');
const statisticsRouter = require('./statistics');
const questionsRouter = require('./questions');
const modulesRouter = require('./modules');
const themesRouter = require('./themes');
const answersRouter = require('./answers');
const profileRouter = require('./profile');

router.use('/auth', authRouter);
router.use('/statistics', statisticsRouter);
router.use('/questions', questionsRouter);
router.use('/modules', modulesRouter);
router.use('/themes', themesRouter);
router.use('/answers', answersRouter);
router.use('/profile', profileRouter);

module.exports = router;
