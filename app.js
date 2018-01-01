const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%20315%20hudson%20st%20Newyork',
  json: true
}, (error, response, body) => {
//  console.log(JSON.stringify(response, undefined, 2)); //it we will get the entire object list from the terminal
console.log(`Address: ${body.results[0].formatted_address}`); //getting the exact adress location from JSON view
console.log(`Latitude: ${body.results[0].geometry.location.lat}`); // accessing latitute
console.log(`Longitude: ${body.results[0].geometry.location.lng}`); // acessing longitude
console.log(`Place id: ${body.results[0].place_id}`);
});
// body is the core date that comesback from the server, its the body!
// response
//error = means theres something wrong with the code, http address etc
