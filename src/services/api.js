import axios from 'axios';
import { apiKey } from '../../env.json';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});

api.interceptors.request.use((config) => {
  const configuration = { ...config };
  const { url } = configuration;

  configuration.url = url.concat(`&apiKey=${apiKey}`);

  return configuration;
}, e => (
  Promise.reject(e)
));

export default api;
