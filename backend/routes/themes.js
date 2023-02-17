const router = require('express').Router();

const { getThemes } = require('../controllers/getThemes');

router.get('/', getThemes);

module.exports = router;
