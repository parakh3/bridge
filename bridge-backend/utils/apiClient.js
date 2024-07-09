const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://aggregator-api.xy.finance/v1', 
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = apiClient;
