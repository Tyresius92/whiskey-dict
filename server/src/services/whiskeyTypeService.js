import { fetch, fetchAll } from '../db/db';

const getWhiskeyTypes = () => fetchAll('SELECT * FROM whiskey_types');

const getWhiskeyTypeById = id =>
  fetch('SELECT * FROM whiskey_types WHERE id = $1', [id]);

export const whiskeyTypeService = {
  getWhiskeyTypes,
  getWhiskeyTypeById,
};
