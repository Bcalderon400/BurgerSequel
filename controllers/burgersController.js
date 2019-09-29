// require models
const db = require("../models");

// create app router
const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// define app's routes
// get all burger names
router.get("/", function(req, res) {
    db.Burger.findAll().then(function(data) {
        res.render("index", { burgers: data });
    });
});

// add burger name to menu
router.post("/api/burgers", function(req, res) {
    db.Burger.create({
        burgerName: req.body.burgerName
    }).then(function(data) {
        res.json(data);
    });
});

// devour a specific burger
router.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.json(data);
    });
});

module.exports = router;