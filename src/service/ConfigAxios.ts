import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token') || '{}');

const ConfigAxios = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`, 
  },
});

export default ConfigAxios;
