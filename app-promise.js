const yargs = require('yargs');
const axios = require('axios'); //npm install axios@0.17.1 --save

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBzyLARrTlE078FjEM_m_RZB5InTDdli3I`;

  axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find the Address. ');
    }

    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`;
    console.log(response.data.results.formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
  let temperature = response.data.currently.temperature;
  let apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`it's currently ${temperature}. it feels like ${apparentTemperature}.`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND'){
    console.log('unable to connect API servers.');
  }else {
      console.log(e.message);
  }
});
