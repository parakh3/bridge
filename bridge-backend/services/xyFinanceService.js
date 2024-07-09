const axios = require('axios');
const { XY_FINANCE_API_URL } = require('../constants/urls');

const apiClient = axios.create({
  baseURL: XY_FINANCE_API_URL,
});



exports.getTokens = async () => {
  const response = await apiClient.get('/recommendedTokens');
  return response.data;
};

