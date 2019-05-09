const fetch = require('node-fetch');
const https = require('https');
let request = require('request');
const axios = require("axios");

// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

// var request = require('request');

// console.log('Weather in Name goes here is');
// request('https://www.metaweather.com/api/location/2480318', function(
//   error,
//   response,
//   body
// ) {
//   if (!error && response.statusCode == 200) {
//     var parsedData = JSON.parse(body);
//     console.log(parsedData);
//   }
// });
// // APIs:https://en.wikipedia.org/wiki/Application_programming_interface

const sample1 = () => {
  console.log('Sample1 running');
  async function getWeatherAsync(location) {
    let response = await fetch(
      `https://www.metaweather.com/api/location/${location}`
    );

    let data = await response.json();

    return data;
  }

  getWeatherAsync(21212)
    .then(data => console.log('test', data))
    .catch(err => console.log('from error', err, err.message));
};

const sample2 = () => {
  console.log('Sample2 running');
  async function asyncData() {
    const response = await fetch('https://swapi.co/api/people/');
    const data = await response.json();
    return data;
  }

  (async () => {
    const result = await asyncData();
    console.log(result);
  })();
};

const sample3 = () => {
  console.log('Sample3 running');

  async function getUserAsync(name) {
    let response = await fetch(`https://api.github.com/users/${name}`);
    let data = await response.json();
    return data;
  }
  getUserAsync('exia01')
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message));
};
// sample1();
// sample2();
// sample3();

const AsyncGetActivity = async () => {
  const url = ('https://www.boredapi.com/api/activity?participants=1')
  try {
    // this parse may fail
    const response = (await axios.get(url));
    const data = response.data;
    console.log(data);
    console.log(`"The activity today is..... \n${data.activity}"`)
  } catch (err) {
    console.log(err);
  }
};

AsyncGetActivity()

//more APIS here https://www.programmableweb.com/
//promises here https://zellwk.com/blog/js-promises/
