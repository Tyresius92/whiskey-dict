import { fetch, fetchAll } from '../db/db';

const getBottlers = () => fetchAll('SELECT * FROM bottlers');

const getBottlerById = id =>
  fetch('SELECT * FROM bottlers WHERE id = $1', [id]);

export const bottlerService = {
  getBottlers,
  getBottlerById,
};
