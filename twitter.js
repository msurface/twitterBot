// requiring in twitter
const Twitter = require('twitter');

// setting up twitter tokens and keys
const client = new Twitter({
    consumer_key: 'pdDHB2OWQqOjJkNNlSjWrA5F1',
    consumer_secret: 'JLOPMncpWLAfFT26HHT86C3jHzuEfUmVvgQq5njVriqMlR7xAG',
    access_token_key: '1018606472073285632-yTbfl7KymI6jFrvl8K6ehcR5hpFGl5',
    access_token_secret: 'fmuWFu5vdcQqZmY2Dn570ORs1ZKGdo3pZExnqmn89C0Jt',
});

client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
    stream.on('data', function(event) {
      console.log(event && event.text);
    });
  
    stream.on('error', function(error) {
      throw error;
    });
  });