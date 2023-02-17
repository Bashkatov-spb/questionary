const router = require('express').Router();

const { getAnswers } = require('../controllers/getAnswers');

router.get('/', getAnswers);

module.exports = router;
