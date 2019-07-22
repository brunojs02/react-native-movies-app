import axios from 'axios';
import { themoviedb } from '../../env.json';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

api.interceptors.request.use((config) => {
  const configuration = { ...config };
  const { params } = configuration;

  configuration.params = {
    ...params,
    api_key: themoviedb.apiKey,
    language: 'en-US',
  };

  return configuration;
}, e => (
  Promise.reject(e)
));

export default api;
