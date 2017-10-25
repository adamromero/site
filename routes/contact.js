var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact.ejs', {layout: 'contact', title: ' - Contact'});
});

module.exports = router;
