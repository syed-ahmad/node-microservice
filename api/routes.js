/*jshint node: true */
'use strict';
var controller = require('./controller');
var express = require('express');
var app = require('express')();

module.exports = function (app) {
  app.route('/about')
    .get(controller.about);
  app.route('/distance/:zipcode1/:zipcode2')
    .get(controller.get_distance);
};