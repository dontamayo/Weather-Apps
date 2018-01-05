const request = require('request');

let geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address);


  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect to google server.'); // when you messed up with the google address
    }else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address. ');  // sample when put the wrong zipcode
    }else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longtitude: body.results[0].geometry.location.lng
      });
  //  console.log(JSON.stringify(response, undefined, 2)); //it we will get the entire object list from the terminal
  // console.log(`Address: ${body.results[0].formatted_address}`); //getting the exact adress location from JSON view
  // console.log(`Latitude: ${body.results[0].geometry.location.lat}`); // accessing latitute
  // console.log(`Longitude: ${body.results[0].geometry.location.lng}`); // acessing longitude
  // console.log(`Place id: ${body.results[0].place_id}`);
    }
  });
  // body = is the core date that comesback from the server, its the body!
  // response =
  //error = means theres something wrong with the code, http address etc
};

module.exports.geocodeAddress = geocodeAddress;
