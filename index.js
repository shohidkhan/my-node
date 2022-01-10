const express = require("express");
var cors = require("cors");
var app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server side only");
});
const users = [
  { id: 0, name: "shohid", email: "shohid@gmail.com" },
  { id: 1, name: "mohin", email: "mohin@gmail.com" },
  { id: 2, name: "foysal", email: "foysal@gmail.com" },
];
app.get("/users", (req, res) => {
  const search = req.query.search;

  if (search) {
    const searchResult = users.filter((user) => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
app.post("/users", (req, res) => {
  const user = req.body;
  user.id = users.length;
  users.push = user;
  console.log("hitting the post");
  //res.send("from server side");
  res.json(user);
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.listen(port, () => {
  console.log("litening port", port);
});
