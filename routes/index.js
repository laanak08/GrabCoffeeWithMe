var express = require('express');
var request = require('request');
var moment = require('moment');
var qs = require('qs');
var router = express.Router();


var server = "http://localhost:3000/";
if (process.env.NODE_ENV == "production") {
  server = "http://peerioapi-20256.onmodulus.net/";
}

router.get('/', function(req, res) {
  res.render('homepage', { title: 'Express', js: 'home.js'});
});

router.get('/meet', function(req, res) {
  res.render('picking_occasion', { title: 'Express', js: 'meet.js' });
});

router.get('/meetup', function(req, res) {
  res.render('picking_occasion', { title: 'Express', js: 'meet.js' });
});

router.get("/picktimes/:hashId/:meetupId", function(req, res) {
  var nextFewDays = {}
  nextFewDays.titles = [
    moment(), 
    moment().add("days", 1), 
    moment().add("days", 2), 
    moment().add("days", 3)
  ];
  nextFewDays.times = [
    {start: 7, end: 8},
    {start: 8, end: 9},
    {start: 9, end: 10},
    {start: 10, end: 11},
    {start: 11, end: 12},
    {start: 12, end: 13},
    {start: 13, end: 14},
    {start: 14, end: 15},
    {start: 15, end: 16},
    {start: 16, end: 17},
    {start: 17, end: 18},
    {start: 18, end: 19},
    {start: 19, end: 20},
    {start: 20, end: 21}
  ];

  res.render('picking_times', { title: 'Express', js: 'picktimes.js', titles:  nextFewDays.titles, times:  nextFewDays.times, moment: moment });
});

router.post("/picktimes/:hashId/:meetupId", function(req, res) {
  request.put({
    url: server + "meetup/"+ req.params.meetupId + "/addtimeframes/" + req.params.hashId,
    json: true,
    body: req.body
  }, function(error, response, body) {
      res.send(200, body);
  });
});

router.get('/finalize_time', function(req, res) {
  res.render('finalize_time', { title: 'Express', url :  '/finalize_time', js: 'finalize_time.js'});
});

router.post('/finalize_time', function(req, res) {
  request.put({
    url: server + "meetup/"+ req.body.meetupId + "/accepttime",
    json: true,
    body: req.body
  }, function(error, response, body) {
      res.send(200, body);
  });
});

router.get('/picking_locations/:meetupId/:userId', function(req, res) {
  var meetupId = req.params.meetupId;
  request.get({
    url: server + "meetup/"+ meetupId +"/locations",
    json: true,
  }, function(error, response, body) {
      res.render('picking_locations', { title: 'Express', js: 'picking_locations.js', locations: body, meetupId: meetupId });
  });
  
});

router.get('/add_geolocation/:meetupId/:userId', function(req, res) {
  res.render('add_geolocation', { title: 'Express', js: 'add_geolocation.js', meetupId: req.params.meetupId, userId: req.params.userId });
});

router.post('/user/addlocation', function(req, res) {
  request.put({
    url: server + "user/addlocation",
    json: true,
    body: req.body
  }, function(error, response, body) {
      res.send(200, body);
  });
  // res.send(200, body);
  // res.render('picking_locations', { title: 'Express', js: 'picking_locations.js' });
});

router.get('/confirmation', function(req, res) {
  res.render('confirmation', { title: 'Express', js: 'confirmation.js' });
});

router.get('/terms', function(req, res) {
  res.render('terms_of_service', { title: 'Express', js: 'terms.js' });
});

router.get('/finalize/:meetupId', function(req, res) {
  meetupId = req.params.meetupId;
  request.get({
    url: server + "meetup/" + meetupId,
    json: true
    // body: req.body
  }, function(error, response, body) {
      res.render('meetup_finalized', { title: 'Express', js: 'finalize.js', meetup: body, moment: moment });
  });
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
  hashId = req.params.hashId;
  meetupId = req.params.meetupId;
  // check if available times from other user
  url = server + "meetup/" + meetupId + "/availableTimes/"+ hashId;
  request.get({
    url: url,
    json: true
  }, function(error, response, body) {
    if (body.others.length > 0) {
      res.render("finalize_time", { proposedToMe: body.others, js: 'finalize_time.js', moment: moment, meetupId: meetupId, userId: hashId} );
    } else {
      res.redirect("/picktimes/" + meetupId + "/" + hashId);
    }
  });
});

router.post('/meetup', function(req, res) {
  data = req.body;
  request.post({
    url: server + "meetup",
    body: data,
    json: true
  }, function(error, response, body) {
    res.send(200, body);
  });


});



module.exports = router;
