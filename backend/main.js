const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/data", (req, res) => {
  res.json({
    data: [
      {
        id: 0,
        name: "James",
      },
      {
        id: 1,
        name: "John",
      },
    ],
  });
});

app.get("/crash", (req, res) => {
  let object = {
    name: "aline",
  };

  res.send(object.person.name);
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server has started");
});
