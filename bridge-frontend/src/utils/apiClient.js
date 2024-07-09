import axios from 'axios';
import { API_BASE_URL } from '../constants/urls';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTokens = async () => {
  const response = await apiClient.get('/tokens');
  return response.data;
};

