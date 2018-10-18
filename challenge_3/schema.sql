--some
-- create database grocery_list (drop if exists)
DROP DATABASE IF EXISTS shopping_cart;
CREATE database shopping_cart;
-- use grocery_list database
USE shopping_cart;
-- create table with cols id, item, quantity
CREATE TABLE userInfo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username TEXT,
  email TEXT,
  password TEXT,
  line_1  TEXT,
  line_2 TEXT,
  city TEXT,
  state TEXT,
  zip_code INT,
  credit_card_num INT,
  expiry_date INT,
  cvv INT,
  billing INT
);
INSERT INTO userInfo (username, email, password, line_1, line_2, city, state, zip_code, credit_card_num, expiry_date, cvv, billing) VALUES("LANA","SG@GMAIL.COM","1234","LINEONE","LINETWO","ULANUDE","SY",23456,12345,121018,3333,6778);

  