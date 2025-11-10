CREATE DATABASE deployment;

CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'Aa&21794636';

GRANT ALL PRIVILEGES ON deployment.* TO 'app_user'@'localhost';

FLUSH PRIVILEGES;
EXIT;