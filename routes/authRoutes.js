const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);  // POST /api/register
router.post('/login', login);        // POST /api/login

module.exports = router;
