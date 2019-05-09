const axios = require('axios');
const testGetMoviesAsync = async (movie, res) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${movie}&apikey=thewdb`
    );
    res.send(response.data);
  } catch (err) {
    console.log('Error: ', err);
    res.send(err);
  }
};
const getMoviesAsync = async (movie) => {
  let response = await axios.get(
    `https://www.omdbapi.com/?s=${movie}&apikey=thewdb`
  );
  return await response.data
};


module.exports = {
  getMoviesAsync: getMoviesAsync,
  testGetMoviesAsync:testGetMoviesAsync
};
