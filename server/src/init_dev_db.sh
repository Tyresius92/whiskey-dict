PGPASSWORD=postgres psql -U whiskeydictadmin -d whiskey_dict_db -c "
	DROP TABLE IF EXISTS whiskies CASCADE;
	DROP TABLE IF EXISTS bottlers CASCADE;
	DROP TABLE IF EXISTS distilleries CASCADE;
	DROP TABLE IF EXISTS whiskey_types CASCADE;

	CREATE TABLE whiskey_types (
		id SERIAL PRIMARY KEY,
		type VARCHAR (50) UNIQUE NOT NULL
	);

	CREATE TABLE bottlers (
		id SERIAL PRIMARY KEY,
		name VARCHAR (100) UNIQUE NOT NULL
	);

	CREATE TABLE distilleries (
		id SERIAL PRIMARY KEY,
		name VARCHAR (100) UNIQUE NOT NULL
	);

	CREATE TABLE whiskies (
		id SERIAL PRIMARY KEY,
    name VARCHAR (200) NOT NULL,
    alcohol_by_volume DECIMAL(5,2),
    age VARCHAR (50),
		distillery_id INTEGER NOT NULL REFERENCES distilleries(id),
		bottler_id INTEGER NOT NULL REFERENCES bottlers(id),
    type_id INTEGER NOT NULL REFERENCES whiskey_types(id)
	);

  COPY whiskey_types(id, type)
  FROM '$PWD/src/seedData/whiskey_types.csv'
  DELIMITER ','
  CSV HEADER;


  COPY bottlers(id, name)
  FROM '$PWD/src/seedData/bottlers.csv'
  DELIMITER ','
  CSV HEADER;

  COPY distilleries(id, name)
  FROM '$PWD/src/seedData/distilleries.csv'
  DELIMITER ','
  CSV HEADER;

  COPY whiskies(name, alcohol_by_volume, age, distillery_id, bottler_id, type_id)
  FROM '$PWD/src/seedData/whiskies.csv'
  DELIMITER ','
  CSV HEADER;
"
