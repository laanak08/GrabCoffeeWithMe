var express = require('express');
var request = require('request');
var qs = require('qs');
var router = express.Router();
var localServer = "http://localhost:3000/";
var prodServer = "http://peerioapi-20256.onmodulus.net/";

router.get('/', function(req, res) {
  res.render('homepage', { title: 'Express', js: 'home.js'});
});

router.get('/meet', function(req, res) {
  res.render('picking_occasion', { title: 'Express', js: 'meet.js' });
});

router.get('/meetup', function(req, res) {
  res.render('picking_occasion', { title: 'Express', js: 'meet.js' });
});

router.get('/picktimes', function(req, res) {
  res.render('picking_times', { title: 'Express', url :  '/picktimes', js: 'picktimes.js'});
});

router.get('/finalize_time', function(req, res) {
  res.render('finalize_time', { title: 'Express', url :  '/finalize_time', js: 'finalize_time.js'});
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

router.get('/marketplace', function(req, res) {
  res.render('marketplace', { title: 'Express', js: 'marketplace.js' });
});

router.get('/check_email', function(req, res) {
  res.render('check_email', { title: 'Express', js: 'check_email.js' });
});

router.post('/signin', function(req, res) {
  res.render('homepage', { title: 'Express', js: 'signin.js' });
});

router.get('/meetup/:meetupId/:hashId', function(req, res) {
  // get meetup id
  // console.log(req.params);
  hashId = req.params.hashId;
  meetupId = req.params.meetupId;
  // var data = {
  //   hash: hashId
  // };
  // check if available times from other user
  url = prodServer + "meetup/" + meetupId + "/availableTimes/"+ hashId;
  request.get({
    url: url,
    body: data,
    json: true
  }, function(error, response, body) {
    //TODO if available times
      // route to /finalize_time
    //TODO else
      // route to /picktimes
    res.redirect("/picktimes");
  });
});

router.post('/meetup', function(req, res) {
  data = req.body;
  request.post({
    url: prodServer + "meetup",
    body: data,
    json: true
  }, function(error, response, body) {
    res.send(200, body);
  });


});



module.exports = router;
