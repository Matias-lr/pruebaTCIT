CREATE DATABASE challenge;

\c challenge

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    description TEXT
);

\dt
--data de inicial

INSERT INTO post(name,description) VALUES('POST 1','Hola como estaán');
SELECT * FROM post