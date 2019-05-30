// requiring in twitter
const Twitter = require('twitter');
const dotenv = require('dotenv');

// configure .env
dotenv.config();
// 
console.log(process.env.CONSUMER_KEY);
// setting up twitter tokens and keys
const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_SECRET,
});

client.stream('statuses/filter', {track: 'sushi'}, function(stream) {
    stream.on('data', function(event) {
      console.log(event && event.text);
    });
  
    stream.on('error', function(error) {
      throw error;
    });
  });