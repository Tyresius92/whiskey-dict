import { fetch, fetchAll } from '../db/db';

const getWhiskies = () => fetchAll('SELECT * FROM whiskies');

const getWhiskeyById = id =>
  fetch('SELECT * FROM whiskies WHERE id = $1', [id]);

export const whiskeyService = {
  getWhiskies,
  getWhiskeyById,
};
