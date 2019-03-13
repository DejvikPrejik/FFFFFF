const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Kontaktujte mě na prknasvet.cz");
});

app.get("/about", function(req, res) {
  res.send("Jsem sexy chlap");
});
app.get("/hobbies", function(req, res) {
  res.send("Nic");
});

app.get("/calc", function(req, res) {
  res.send("Nic");
});

app.listen(8080, function() {
  console.log("Server běží na portu 8080");
});
