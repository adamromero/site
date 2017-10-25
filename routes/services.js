var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('services.ejs', {layout: 'services', title: ' - Services'});
});

module.exports = router;
