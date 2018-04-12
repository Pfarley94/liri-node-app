require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var keys = require('./keys.js')

//twitter
var client = new Twitter(keys.twitter);

if (process.argv[2] == "my-tweets") {
  client.get('search/tweets', { q: 'pfcoding1' }, function (error, tweets) {
    console.log(tweets);

  });
};

 // OMDB Request
  var request = require('request');
  request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });

//spotify
  var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }

      console.log(data);
    });

