const mysql = require("mysql2");

module.exports = mysql.createConnection({
  host: "localhost",
  user: "app_user",
  password: "app_user",
  database: "deployment",
});
