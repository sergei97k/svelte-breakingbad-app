import api, { limit } from '../../helpers/api';

export function get(req, res) {
  // Need to set the default limit and offset params to API
  const query = {
    limit,
    offset: req.query.offset || 0
  };

  api('characters', query).then( data => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(data));
  });
}
