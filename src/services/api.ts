import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://market-sd.herokuapp.com' || 'http://localhost:3333',
});
