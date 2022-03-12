import { fetch, fetchAll } from '../db/db';

const getDistilleries = () => fetchAll('SELECT * FROM distilleries');

const getDistilleryById = id =>
  fetch('SELECT * FROM distilleries WHERE id = $1', [id]);

export const distilleryService = {
  getDistilleries,
  getDistilleryById,
};
