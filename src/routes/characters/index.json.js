import api, { limit, DEFAULT_OFFSET } from '../../helpers/api';

export function get(req, res) {
  // Need to set the default limit and offset params to API
  const offset = req.query.offset || DEFAULT_OFFSET;
  const query = {
    limit,
    offset
  };

  api('characters', query).then( data => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      characters: data,
      offset: Number(offset)
    }));
  });
}
