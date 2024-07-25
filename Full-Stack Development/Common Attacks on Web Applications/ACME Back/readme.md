# ACME Bank

## In this off-platform project, I secured the application by:

- Protecting it against Cross-Site Scripting (XSS) Attacks by using helmet, securing cookies, validating and normalizing data with express-validator, and implementing alternative methods to prevent DOM-Based XSS attacks.
- Preventing SQL injection attacks by using prepared statements as well as validating input.
- Preventing Cross-Site Request Forgery (CSRF) attacks by implementing csurf middleware and updating certain view pages to secure any cross-site request vulnerabilities.

## To run this project you will need to download the existing code and then:
- run ```npm install```
- Making sure your terminal window is open to your project folder, type the following command: ```node app```
- In your browser window navigate to http://localhost:3000/ in order to see the log in page
