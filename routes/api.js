
var express = require('express'),
    request = require('request');
var router = express.Router();


// TODO: make api key configurable
var apiKey = 'd6f9236475ec41518cb5ebbcb0ba629c';
var cycle = '2012';
var apiRoot = 'http://transparencydata.com/api/1.0/';


var echoResponse = function (url, req, res) {
  //console.log('apiURL: ' + url);
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.statusCode = 500;
      res.render('error', error);
    }
  });
};

/* GET industy aggegates. */
router.get('/v1/industries', function (req, res) {
  var path = 'aggregates/industries/top_10.json';
  var query = '?cycle=' + cycle + '&apikey=' + apiKey;
  var apiUrl = apiRoot + path + query;
  echoResponse(apiUrl, req, res);
});

/* GET entities in industry. */
router.get('/v1/industries/:industryId', function (req, res) {
  //industry/31657d3c187e4cecb670d228d7e674d2/orgs.json?cycle=2012&limit=10&
  var path = 'aggregates/industry/' + req.params.industryId + '/orgs.json';
  var query = '?cycle=' + cycle + '&limit=10&apikey=' + apiKey;
  var apiUrl = apiRoot + path + query;
  echoResponse(apiUrl, req, res);
});

/* GET issues for entity. */
router.get('/v1/entities/:entityId/issues', function (req, res) {
  //aggregates/org/5662459bf8c243d7bbd9f5c85a568e99/issues.json?c
  var path = 'aggregates/org/' + req.params.entityId + '/issues.json';
  var query = '?cycle=' + cycle + '&limit=10&apikey=' + apiKey;
  var apiUrl = apiRoot + path + query;
  echoResponse(apiUrl, req, res);
});

module.exports = router;
