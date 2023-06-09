const express = require("express");
const db = require("./models");
const { User, Blog } = db;
const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/testcall", async (req, res) => {
  // console.log(db)

  res.json({
    type: "success",
    data: "halo dunia",
  });
});

app.get("/user", async (req, res) => {
  // console.log(db)

  const users = await User.findAll();
  res.json(users);
});

app.get("/blog", async (req, res) => {
  // console.log(db)

  const blogs = await Blog.findAll({ include: User });
  res.json(blogs);
});

app.listen(3000, () => {
  console.log("running...");
});
