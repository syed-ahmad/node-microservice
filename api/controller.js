/*jshint node: true */
var properties = require('../package.json');
var distance = require('../service/distance');

function about(req, res) {
  var aboutInfo = {
    name: properties.name,
    version: properties.version
  };

  res.json(aboutInfo);
}

function get_distance(req, res) {
  distance.find(req, res, function (err, dist) {
    if(err) res.send(err);
    res.json(dist);
  });
}

var controllers = {
  about: about,
  get_distance: get_distance
};

module.exports = controllers;
