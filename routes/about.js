var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/', function(req, res, next) {
  res.render('about.ejs', {layout: 'about', title: ' - About'});
});

module.exports = router;
