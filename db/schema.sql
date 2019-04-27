CREATE DATABASE foodtruck;
USE foodtruck;

CREATE TABLE foods
(
    id int not null auto_increment,
food_name VARCHAR
    (100) not null,
devour boolean default false,
PRIMARY KEY
    (id)
);