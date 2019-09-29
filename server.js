// setup express app
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// mount express middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup handlebars for templating
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give server access to them
const routes = require("./controllers/burgersController.js");
app.use(routes);

// start server
app.listen(PORT, function() {
  console.log(`Server listening on PORT ${PORT}`);
});