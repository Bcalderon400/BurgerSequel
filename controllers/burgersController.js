// create app router
const express = require("express");
const router = express.Router();

// model require
const burger = require("../models");

// define app's routes
// get all burger names
router.get("/", function(req, res) {
    db.Burger.findAll(function(data) {
        res.render("index", { burgers: data });
    });
});

// add burger name to menu
router.post("/api/burgers", function(req, res) {
    db.Burger.create({
        burgerName: req.body.burgerName
    }).then(function(data) {
        res.json(data)
    })
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