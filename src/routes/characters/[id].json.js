import api from '../../helpers/api';

export function get(req, res) {
  const { id } = req.params;

  api('characters', { id }).then( data => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(data));
  });
}
