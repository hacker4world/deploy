CREATE DATABASE deployment;

CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'app_user';

GRANT ALL PRIVILEGES ON deployment.* TO 'app_user'@'localhost';

FLUSH PRIVILEGES;
EXIT;