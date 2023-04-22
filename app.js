const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs");
});

app.get("/about", (req, res) => {
  res.render(__dirname + "/views/about.ejs");
});
app.get("/animalfeed", (req, res) => {
  res.render(__dirname + "/views/animalfeed.ejs");
});
app.get("/awards", (req, res) => {
  res.render(__dirname + "/views/awards.ejs");
});
app.get("/charity", (req, res) => {
  res.render(__dirname + "/views/charity.ejs");
});
app.get("/contact", (req, res) => {
  res.render(__dirname + "/views/contact.ejs");
});
app.get("/cookieconsent", (req, res) => {
  res.render(__dirname + "/views/cookieconsent.ejs");
});
app.get("/humanrights", (req, res) => {
  res.render(__dirname + "/views/humanrights.ejs");
});
app.get("/organic", (req, res) => {
  res.render(__dirname + "/views/organic.ejs");
});
app.get("/petfood", (req, res) => {
  res.render(__dirname + "/views/petfood.ejs");
});
app.get("/ports", (req, res) => {
  res.render(__dirname + "/views/ports.ejs");
});
app.get("/privacy", (req, res) => {
  res.render(__dirname + "/views/privacy.ejs");
});
app.get("/products", (req, res) => {
  res.render(__dirname + "/views/products.ejs");
});
app.get("/sustainability", (req, res) => {
  res.render(__dirname + "/views/sustainability.ejs");
});
app.get("/taxstrategy", (req, res) => {
  res.render(__dirname + "/views/taxstrategy.ejs");
});
app.get("/termsofuse", (req, res) => {
  res.render(__dirname + "/views/termsofuse.ejs");
});

app.use((req, res, next) => {
  res.render(__dirname + "/views/404.ejs");
  next();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
