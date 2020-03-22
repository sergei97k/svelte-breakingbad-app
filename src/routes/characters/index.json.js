import api from '../../helpers/api';

export function get(req, res) {
  api('characters', req.query).then( data => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(data));
  });
}
