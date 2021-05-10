const express = require("express");
const { get } = require("http");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 20 },
  { name: "Mark", age: 19 },
];

app.get("/", (req, res) => {
  res.status(200);
  res.json("Hello World");
});

app.get("/first/user", (req, res) => {
  res.status(200);
  res.json(users[0]);
});

app.get("/user", (req, res) => {
  const user = req.query.name;

  const found = users.find((element) => {
    return element.name === user;
  });

  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.json("User not found");
  }
});
app.post("/create/user", (req, res) => {
  const newUser = { name: req.body.name, age: req.body.age };

  users.push(newUser);

  res.status(201);

  res.json(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
