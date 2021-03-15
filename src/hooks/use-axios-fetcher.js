import axios from 'axios';

export const fetcher = (url, params) => {
  const options = { params, withCredentials: true };
  return axios.get(url, options).then(res => {
    return res;
  });
};
