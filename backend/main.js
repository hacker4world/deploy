const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./database/connection");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/data", async (req, res) => {
  connection.execute("SELECT * FROM users", (err, result) => {
    res.json({
      users: result,
    });
  });
});

app.post("/api/create-test-user", (req, res) => {
  connection.query('INSERT INTO users (name, age) VALUES ("test", 25)');
  res.send("user created");
});

connection.connect(() => {
  console.log("Database connected");

  app.listen(4000, () => {
    console.log("Server has started");
  });
});
