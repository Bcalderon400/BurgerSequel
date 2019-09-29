// create app router
const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// define app's routes
// get all burger names
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", { burgers: data });
  });
});

// add burger name to menu
router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.burgerName, function(data) {
    res.json({ id: data.insertId });
  });
});

// devour a specific burger
router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function(data) {
    if (data.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;