const router = require('express').Router();

const { getModules } = require('../controllers/getModules');

router.get('/', getModules);

module.exports = router;
