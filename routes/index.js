var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('homepage', { title: 'Express' });
});

router.get('/meet', function(req, res) {
  res.render('picking_occasion', { title: 'Express' });
});

router.get('/picktimes', function(req, res) {
  res.render('picking_times', { title: 'Express', url :  '/picktimes'});
});

router.get('/picking_locations', function(req, res) {
  res.render('picking_locations', { title: 'Express' });
});

router.get('/confirmation', function(req, res) {
  res.render('confirmation', { title: 'Express' });
});

router.post('/signin', function(req, res) {
  res.render('homepage', { title: 'Express' });
});



module.exports = router;
