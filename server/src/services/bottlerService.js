import { fetch, fetchAll } from '../db/db';

const getBottlers = () => {
  return fetchAll('SELECT * FROM bottlers');
};

const getBottlerById = id => {
  return fetch('SELECT * FROM bottlers WHERE id = $1', [id]);
};

module.exports = {
  getBottlers,
  getBottlerById,
};
