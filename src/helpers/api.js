const API_URL = 'https://www.breakingbadapi.com/api';

const api = (path) => {
  const fetch = process.browser ? window.fetch : require('node-fetch').default;
  const opts = { method: 'GET', headers: {} };

  return fetch(`${API_URL}/${path}`, opts)
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
