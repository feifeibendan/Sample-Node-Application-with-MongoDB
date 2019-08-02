'use strict';
var express = require('express');
var users = require('../controllers/users');

var router = express.Router();

router.get('/:id', users.getUser);
router.post('/', users.addUser);

module.exports = router;
