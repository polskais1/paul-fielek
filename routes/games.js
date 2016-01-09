var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('games', { title: 'Games' });
});

router.get('/you_are_the_monsthair', function(req, res, next) {
  res.render('games/you_are_the_monsthair', { title: 'You Are The Monsthair' });
});

module.exports = router;
