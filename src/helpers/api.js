import { stringify } from 'query-string';

const API_URL = 'https://www.breakingbadapi.com/api';
export const TOTAL_AMOUNT = 63;

const api = (path, params) => {
  const fetch = process.browser ? window.fetch : require('node-fetch').default;
  const opts = { method: 'GET', headers: {} };

  return fetch(`${API_URL}/${path}?${stringify(params)}`, opts)
    .then(r => r.text())
    .then(json => {
      try {
        return JSON.parse(json);
      } catch (err) {
        return json;
      }
    });
};

export default api;
