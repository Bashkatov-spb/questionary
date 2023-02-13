const express = require('express');

const router = express.Router();
const { register } = require('../controllers/register');
const { login } = require('../controllers/login');
const { logout } = require('../controllers/logout');
const { checkUser } = require('../controllers/checkUser');

router.post('/registration', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/checkUser', checkUser);

module.exports = router;
