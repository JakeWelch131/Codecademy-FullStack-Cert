SELECT * FROM customers
ORDER BY customer_id;

SELECT * FROM customers_log;

CREATE TRIGGER log_change
BEFORE UPDATE ON customers
FOR EACH ROW
EXECUTE PROCEDURE log_customers_change();

UPDATE customers
SET email_address = 'fred'
WHERE customer_id = 1;

CREATE TRIGGER customer_insert
BEFORE INSERT ON customers
FOR EACH STATEMENT
EXECUTE PROCEDURE log_customers_change();

INSERT INTO customers (first_name, last_name, email_address, home_phone, city, state_name, years_old)
VALUES ('Jeffrey','Cook','Jeffrey.Cook@example.com','202-555-0398','Jersey city','New Jersey',66);


CREATE TRIGGER customer_min_age
BEFORE UPDATE ON customers
FOR EACH ROW
WHEN (NEW.years_old < 13)
EXECUTE PROCEDURE override_with_min_age();

UPDATE customers
SET years_old = 6, first_name = 'eddy'
WHERE customer_id = 1;

UPDATE customers
SET years_old = 16
WHERE customer_id = 2;

SELECT * FROM customers
ORDER BY customer_id;

SELECT * FROM customers_log;

DROP TRIGGER customer_min_age
ON customers;

SELECT * FROM
information_schema.triggers;
