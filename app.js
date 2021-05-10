const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const todos = [
  { todo: "wake up", isCompleted: false },
  { todo: "Eat Breakfast", isCompleted: false },
];

app.get("/todos", (req, res) => {
  res.status(200);
  res.json(todos);
});

app.post("/create/todo", (req, res) => {
  const newToDo = { todo: req.body.todo, isCompleted: false };
  todos.push(newToDo);
  res.status(201);
  res.json(newToDo);
});

app.put("/update/todo/:name", (req, res) => {
  const newTodo = req.body;
  const updatedTodo = req.params.name;
  let i;
  const found = todos.find((element, index) => {
    i = index;
    return element.todo === updatedTodo;
  });
  if (found) {
    todos[i] = newTodo;
  }

  res.json(todos);
});

app.delete("/delete/todo/:name", (req, res) => {
  const deletedTodo = req.params.name;
  let i;
  const found = todos.find((element, index) => {
    i = index;
    return element.todo === deletedTodo;
  });
  if (found) {
    todos.splice(i, 1);
  }
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
