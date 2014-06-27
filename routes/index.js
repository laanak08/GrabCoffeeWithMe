var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('homepage', { title: 'Express', js: 'home.js'});
});

router.get('/meet', function(req, res) {
  res.render('picking_occasion', { title: 'Express', js: 'meet.js' });
});

router.get('/picktimes', function(req, res) {
  res.render('picking_times', { title: 'Express', url :  '/picktimes', js: 'picktimes.js'});
});

router.get('/finalize_time', function(req, res) {
  res.render('finalize_time', { title: 'Express', url :  '/picktimes', js: 'finalize_time.js'});
});

router.get('/picking_locations', function(req, res) {
  res.render('picking_locations', { title: 'Express', js: 'picking_locations.js' });
});

router.get('/confirmation', function(req, res) {
  res.render('confirmation', { title: 'Express', js: 'confirmation.js' });
});

router.get('/terms', function(req, res) {
  res.render('terms_of_service', { title: 'Express', js: 'terms.js' });
});

router.get('/finalize', function(req, res) {
  res.render('meetup_finalized', { title: 'Express', js: 'finalize.js' });
});

router.post('/signin', function(req, res) {
  res.render('homepage', { title: 'Express', js: 'signin.js' });
});

router.get('/marketplace', function(req, res) {
  res.render('marketplace', { title: 'Express', js: 'marketplace.js' });
});

router.post('/meetup', function(req, res) {
  console.log(req.body);
  res.send(200,req.body);
});



module.exports = router;
