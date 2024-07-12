var express = require('express');
var router = express.Router();

/* GET form page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Mini Message Board' });
});

module.exports = router;
