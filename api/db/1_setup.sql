DROP TABLE IF EXISTS items;

CREATE TABLE items(
    id serial PRIMARY KEY,
    item_name varchar (255) NOT NULL,
    amount int NOT NULL
);