const express = require("express");

const router = express.Router();

router.post("/chat", (req, res, next) => {
  const script = `<script>localStorage.setItem('username', ${JSON.stringify(
    req.body.username
  )});</script>`;
  res.send(
    `${script}<form action="/chat" method="POST"><input type="text" name="message"/><button type="submit">send</button></form>`
  );
});

module.exports = router;
