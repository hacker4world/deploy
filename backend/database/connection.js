const mysql = require("mysql2");

module.exports = mysql.createConnection({
  host: "localhost",
  user: "app_user",
  password: "Aa&21794636",
  database: "deployment",
});
