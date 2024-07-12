var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there! ajsdlkfajs;lkdfja;lsjdf;lkasjdf;lajsdl;fjk;asfdal;skdjfl;aksjd;lfkjas;ldkfjasdfl;aksjdfl;kasjdafsfaslk;djfl;aksjdfl",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello There!",
    user: "Charles",
    added: new Date()
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', function(req, res, next) {
  var username = req.body.username;
  var message = req.body.message;

  messages.push({text: message, user: username, added: new Date()});

  // Redirect or render a response
  res.redirect('/');
});

module.exports = router;
