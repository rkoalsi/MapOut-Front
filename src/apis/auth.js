import axios from 'axios';

const base = `${process.env.REACT_APP_SERVER_URL}/api/v1/admin`;

export const signin = (body) => axios.post(`${base}/login`, body);
