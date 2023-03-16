const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<form action="/chat" method="POST"><input type="text" name="username" /><button type="submit">login</button></form>'
  );
});

module.exports = router;