import api from '../../helpers/api';

const DEFAULT_QUERY = {
  offset: 0,
  limit: 10
};

export function get(req, res) {
  // Need to set the default limit and offset params to API
  const query = Object.keys(req.query).length ? req.query : DEFAULT_QUERY;

  api('characters', query).then( data => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(data));
  });
}
