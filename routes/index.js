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

router.get('/terms', function(req, res) {
  res.render('terms_of_service', { title: 'Express' });
});

router.get('/finalize', function(req, res) {
  res.render('meetup_finalized', { title: 'Express' });
});

router.post('/signin', function(req, res) {
  res.render('homepage', { title: 'Express' });
});

router.get('/marketplace', function(req, res) {
  res.render('marketplace', { title: 'Express' });
});

router.post('/meetup', function(req, res) {
  console.log(req.body);
  res.send(200,req.body);
});



module.exports = router;
