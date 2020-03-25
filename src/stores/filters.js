import { writable, derived } from 'svelte/store';
import { stringify } from 'query-string';

export const offset = writable(0);
export const limit = writable(10);

export default derived([
  offset,
  limit
], ([ 
  $offset,
  $limit
]) => {
  // TODO: Need to recheck
  if ($offset) {
    return stringify({
      offset: $offset,
      limit: $limit
    })
  }

  return '';
});
