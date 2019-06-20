import axios from 'axios';
import { apiKey } from '../../env.json';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

api.interceptors.request.use((config) => {
  const configuration = { ...config };
  const { url } = configuration;

  configuration.url = url.concat(`?api_key=${apiKey}&language=pt-br`);

  return configuration;
}, e => (
  Promise.reject(e)
));

export default api;
