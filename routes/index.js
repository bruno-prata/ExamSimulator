var express = require('express');
var router = express.Router();

const Controller = require('../controllers/Controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/question', Controller.question);

module.exports = router;
