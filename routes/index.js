var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/message", (req, res, next) => {
  res.render("form", { title: "Send Message" });
});

router.post("/message", (req, res, next) => {
  const { author, message } = req.body;
  console.log("Author:", author);
  console.log("Message:", message);
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
