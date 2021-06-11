const express = require('express');
const router = express.Router();
const passport = require('passport');

const authorsController = require('../controllers/authors');

router.get('/', passport.authenticate('oauth-bearer', {session:false}), authorsController.authors_search); 
router.get('/:authorId',  passport.authenticate('oauth-bearer', {session:false}), authorsController.authors_get);

module.exports = router;