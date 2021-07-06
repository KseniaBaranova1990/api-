const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const text = {
  en: "We like ice cream.",
  ru: "мы любим мороженое",
};

//create API

app.get("/text", (req, res) => {
  const locale = req.header("Accept-Language").substr(0, 2);
  res.send({ text: text[locale] });
});

app.post("/like", (req, res) => {
  res.send({ message: "thank you" });
});

app.listen(8000);
