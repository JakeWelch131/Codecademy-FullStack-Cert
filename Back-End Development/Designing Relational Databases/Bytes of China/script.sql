CREATE TABLE restaurant (
  id integer PRIMARY KEY,
  name varchar(20),
  description varchar(100),
  rating decimal,
  telephone char(10),
  hours varchar(100)
);

CREATE TABLE address (
  id integer PRIMARY KEY,
  street_number varchar(50),
  street_name varchar(50),
  city varchar(20),
  state varchar(50),
  google_map_link varchar(100),
  restaurant_id integer 
    REFERENCES restaurant(id)
);

SELECT 
  constraint_name, table_name, column_name
FROM 
  information_schema.key_column_usage
WHERE 
  table_name = 'restaurant';

SELECT 
  constraint_name, table_name, column_name
FROM 
  information_schema.key_column_usage
WHERE 
  table_name = 'address';

CREATE TABLE category (
  id char(2) PRIMARY KEY,
  name varchar(20),
  description varchar(200)
);

CREATE TABLE dish (
  id integer PRIMARY KEY,
  name varchar(50),
  description varchar(200),
  indicator boolean
);

SELECT 
  constraint_name, table_name, column_name
FROM 
  information_schema.key_column_usage
WHERE 
  table_name = 'dish';

CREATE TABLE review (
  id integer PRIMARY KEY,
  rating decimal,
  description varchar(200),
  review_date date,
  restaurant_id integer 
    REFERENCES restaurant(id)
);

SELECT 
  constraint_name, table_name, column_name
FROM 
  information_schema.key_column_usage
WHERE 
  table_name = 'review';

CREATE TABLE categories_dishes (
  categories_id char(2) 
    REFERENCES category(id),
  dish_id integer 
  REFERENCES dish(id),
  PRIMARY KEY (categories_id, dish_id),
  price money
);



INSERT INTO restaurant VALUES (
  1,
  'Bytes of China',
  'Delectable Chinese Cuisine',
  3.9,
  '6175551212',
  'Mon - Fri 9:00 am to 9:00 pm, Weekends 10:00 am to 11:00 pm'
);

INSERT INTO address VALUES (
  1,
  '2020',
  'Busy Street',
  'Chinatown',
  'MA',
  'http://bit.ly/BytesOfChina',
  1
);

INSERT INTO review VALUES (
  1,
  5.0,
  'Would love to host another birthday party at Bytes of China!',
  '05-22-2020',
  1
);

INSERT INTO review VALUES (
  2,
  4.5,
  'Other than a small mix-up, I would give it a 5.0!',
  '04-01-2020',
  1
);

INSERT INTO review VALUES (
  3,
  3.9,
  'A reasonable place to eat for lunch, if you are in a rush!',
  '03-15-2020',
  1
);

INSERT INTO category VALUES (
  'C',
  'Chicken',
  null
);

INSERT INTO category VALUES (
  'LS',
  'Luncheon Specials',
  'Served with Hot and Sour Soup or Egg Drop Soup and Fried or Steamed Rice  between 11:00 am and 3:00 pm from Monday to Friday.'
);

INSERT INTO category VALUES (
  'HS',
  'House Specials',
  null
);

INSERT INTO dish VALUES (
  1,
  'Chicken with Broccoli',
  'Diced chicken stir-fried with succulent broccoli florets',
  false
);

INSERT INTO dish VALUES (
  2,
  'Sweet and Sour Chicken',
  'Marinated chicken with tangy sweet and sour sauce together with pineapples and green peppers',
  false
);

INSERT INTO dish VALUES (
  3,
  'Chicken Wings',
  'Finger-licking mouth-watering entree to spice up any lunch or dinner',
  true
);

INSERT INTO dish VALUES (
  4,
  'Beef with Garlic Sauce',
  'Sliced beef steak marinated in garlic sauce for that tangy flavor',
  true
);

INSERT INTO dish VALUES (
  5,
  'Fresh Mushroom with Snow Peapods and Baby Corns',
  'Colorful entree perfect for vegetarians and mushroom lovers',
  false
);

INSERT INTO dish VALUES (
  6,
  'Sesame Chicken',
  'Crispy chunks of chicken flavored with savory sesame sauce',
  false
);

INSERT INTO dish VALUES (
  7,
  'Special Minced Chicken',
  'Marinated chicken breast sauteed with colorful vegetables topped with pine nuts and shredded lettuce.',
  false
);

INSERT INTO dish VALUES (
  8,
  'Hunan Special Half & Half',
  'Shredded beef in Peking sauce and shredded chicken in garlic sauce',
  true
);

INSERT INTO categories_dishes VALUES (
  'C',
  1,
  6.95
);

INSERT INTO categories_dishes VALUES (
  'C',
  3,
  6.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  1,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  4,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  5,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  6,
  15.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  7,
  16.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  8,
  17.95
);


SELECT restaurant.name, address.street_number, address.street_name
FROM restaurant, address
WHERE restaurant.id = address.restaurant_id;

SELECT MAX(review.rating) AS best_rating
FROM review, restaurant
WHERE review.restaurant_id = restaurant.id;

SELECT 
  dish.name as spicy_dish_name, 
  category.name as category,
  categories_dishes.price as price
FROM 
  category, dish, categories_dishes
WHERE 
  dish.id = categories_dishes.dish_id
  AND 
  category.id = categories_dishes.categories_id
  AND 
  dish.indicator = true;

SELECT 
dish.id as dish_id,
COUNT(dish.id) as dish_count
FROM dish, categories_dishes
GROUP BY 1
HAVING COUNT(dish.id) > 1;

SELECT 
dish.name as dish_name,
COUNT(categories_dishes.dish_id) as dish_count
FROM dish, categories_dishes
GROUP BY 1, categories_dishes.dish_id, dish.id
HAVING 
  COUNT(categories_dishes.dish_id) > 1
  AND
  dish.id = categories_dishes.dish_id;

SELECT rating, description
FROM review
WHERE rating = ( 
  SELECT MAX(rating) AS best_rating
  FROM review);
