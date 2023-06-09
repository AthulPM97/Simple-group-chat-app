const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const chatRoutes = require("./routes/chat");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

app.use(chatRoutes);

app.use("/", (req, res, next) => {
  res.redirect("/login");
});

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => console.log("server running at port 3000"));
