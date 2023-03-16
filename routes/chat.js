const express = require("express");
const fs = require("fs");

const router = express.Router();

router.post("/chat", (req, res, next) => {
  if (req.body.username) {
    const script = `<script>localStorage.setItem('username', ${JSON.stringify(
      req.body.username
    )});</script>`;
    fs.writeFile('user.txt', req.body.username, (err) => {
      console.log('username stored to user.txt');
    });
    res.send(
      `${script}<form action="/chat" method="POST"><input type="text" name="message"/><button type="submit">send</button></form>`
    );
  } else {
    next();
  }
});

router.post("/chat", (req, res, next) => {
  const message = req.body.message;
  const user = fs.readFileSync('user.txt', 'utf-8', (err,data) => {
    if(err) console.log('error reading file ' + err);
    return data;
  });
  const newMessage = `${user} : ${message}\n`;
  fs.appendFileSync('messages.txt', newMessage);

  next();
});

router.post('/chat', (req, res, next) => {
  const storedMessages = fs.readFileSync('messages.txt', 'utf-8', (err,data) => {
    if(err) console.log(err);
    return data;
  })
  console.log(storedMessages);
  res.send(
    `${storedMessages}<form action="/chat" method="POST"><input type="text" name="message"/><button type="submit">send</button></form>`
  );
})


module.exports = router;
