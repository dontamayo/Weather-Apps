const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%20315%20hudson%20st%20Newyork',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2)); //it we will get the entire object list from the terminal

});
