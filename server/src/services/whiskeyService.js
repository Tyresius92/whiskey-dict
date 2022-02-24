import { fetchAll } from '../db/db';

const getWhiskies = () => {
  return fetchAll('SELECT * FROM whiskies');
};

module.exports = {
  getWhiskies,
};
