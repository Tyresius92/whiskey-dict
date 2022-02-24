import { fetch, fetchAll } from '../db/db';

const getWhiskeyTypes = () => {
  return fetchAll('SELECT * FROM whiskey_types');
};

const getWhiskeyTypeById = id => {
  return fetch('SELECT * FROM whiskey_types WHERE id = $1', [id]);
};

module.exports = {
  getWhiskeyTypes,
  getWhiskeyTypeById,
};
