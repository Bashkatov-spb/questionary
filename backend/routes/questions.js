const router = require('express').Router();

const { getQuestions } = require('../controllers/getQuestions');

router.get('/', getQuestions);

module.exports = router;
