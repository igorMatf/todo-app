const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const Goal = require('../models/todosModel');

router.post('/createGoal', async (req, res, next) => {
    const newGoal = Goal({
        email: req.body.email,
        title: req.body.title,
        description: req.body.description,
        isFinished: false
    });


    try {
        await newGoal.save();
        res.status(201).send(newUser);
    } catch (e) {
        res.status(401).send(newUser);
    }



});


router.post("/getTodos", async (req, res, next) => {
    console.log(req.body.email);
    try {
        const todos = await Goal.find({ email: req.body.email });
        if (todos) {
            res.status(201).json(todos);
        } else {
            res.status(404).json(todos);
        }
    } catch (e) {

    }
});


module.exports = router;