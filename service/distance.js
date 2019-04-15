/*jshint node: true */
var request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY || '4pGFuxS25hgF7zG7htGVQzUh27tfV9kKps7RjHhEWkmRponXwe0oEYOBIHLHsWfH';

const zipCodeUrl = 'https://www.zipcodeapi.com/rest/';

var distance = {
  find: function (req, res, next) {
    const uri = `${zipCodeUrl}${apiKey}/distance.json/${req.params.zipcode1}/${req.params.zipcode2}/mile`;
    console.log(`uri : ${uri}`);
    request(uri, (error, response, body) => {
      if(!error && response.statusCode == 200) {
        res.send(JSON.parse(body));
      } else {
        console.log(`Status code : ${response.statusCode} - Response body : ${response.body}`);
        res.send({distance: -1});
      }
    });
  }
};

module.exports = distance;