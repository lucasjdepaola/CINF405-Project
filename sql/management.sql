CREATE DATABASE brightspace_management;

USE brightspace_management;

CREATE TABLE account (
	CONSTRAINT account_id PRIMARY KEY (id),
    id int NOT NULL,
    fname varchar(255) NOT NULL,
    lname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    pass varchar(255) NOT NULL,
    points int,
    typeId int NOT NULL
);