CREATE TABLE link (
	id serial NOT NULL PRIMARY KEY,
	original TEXT NOT NULL,
	encurtado varchar(100) NOT NULL UNIQUE
);