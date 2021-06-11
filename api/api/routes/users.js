const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/users');

router.post('/me', passport.authenticate('oauth-bearer', {session:false}), userController.users_get); 

module.exports = router;