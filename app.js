// const request = require('request');
// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: "address",
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
//   geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage){
//       console.log(errorMessage);
//     }else {
//       console.log(JSON.stringify(results, undefined, 2));
//     }
//   });

//API
// 0d75ba6fb23f9330747bdaa23924126f
//https://api.forecast.io/forecast/0d75ba6fb23f9330747bdaa23924126f/40.7160913,-74.07407289999999

const request = require('request');

request({
  url: 'https://api.forecast.io/forecast/0d75ba6fb23f9330747bdaa23924126f/40.7160913,-74.07407289999999',
  json: true
}, (error, response, body) => {
if(!error && response.statusCode === 200) {
  console.log("Current Weather : " + body.currently.temperature);
  console.log("Timezone: " + body.timezone);
  console.log("Weather Condition: " + body.currently.summary);
}else if(error){
  console.log("Unable to Connect to forecast.io server");
}else {
  console.log("Unable to fetch weather. ");
}
});
