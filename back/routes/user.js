const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');

// router.get('/', userCtrl.user);

router.post('/login', userCtrl.user);

module.exports = router;