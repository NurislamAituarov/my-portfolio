import Axios from 'axios';

export const httpClient = Axios.create({
  baseURL: process.env.API_URL,
  headers: { 'Content-Type': 'application/json' },
});
