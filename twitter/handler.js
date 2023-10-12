'use strict';

var Twit = require('twit')
 
var twitter = new Twit({
  //don't have credentials; 
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
})

module.exports.getMessages = async (event) => {

  twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log(data)
  })

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
