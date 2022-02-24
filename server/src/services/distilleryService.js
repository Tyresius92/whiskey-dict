import { fetch, fetchAll } from '../db/db';

const getDistilleries = () => {
  return fetchAll('SELECT * FROM distilleries');
};

const getDistilleryById = id => {
  return fetch('SELECT * FROM distilleries WHERE id = $1', [id]);
};

module.exports = {
  getDistilleries,
  getDistilleryById,
};
