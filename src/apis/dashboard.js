import axios from 'axios';

const base = `${process.env.REACT_APP_SERVER_URL}/api/v1/admin`;
const includeAuth = true;

export const getUsers = (params) =>
  axios.get(`${base}/users`, { includeAuth, params });
