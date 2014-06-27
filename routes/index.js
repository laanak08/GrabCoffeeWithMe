var express = require('express');
var request = require('request');
var router = express.Router();
var localServer = "http://localhost:3000/"
var prodServer = "http://peerioapi-20256.onmodulus.net/"

router.get('/', function(req, res) {
  res.render('homepage', { title: 'Express', js: 'home.js'});
});

router.get('/meet', function(req, res) {
  res.render('picking_occasion', { title: 'Express', js: 'meet.js' });
});

router.get('/picktimes', function(req, res) {
  res.render('picking_times', { title: 'Express', url :  '/picktimes', js: 'picktimes.js'});
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
  // $.ajax({
  //     url: localServer + "/meetup",
  //     data: data,
  //     type: 'POST',
  //     success: function(){
  //       res.send(200,req.body);
  //     }
  // });
  data = req.body
  console.log("data", data);
  console.log(localServer + "meetup");
  request.post({
    url: localServer + "meetup",
    body: data,
    json: true
  }, function(error, response, body) {
    res.send(200, body);
  });


});



module.exports = router;
