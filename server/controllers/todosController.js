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
        res.status(201).send(newGoal);
    } catch (e) {
        res.status(201).send(newGoal);
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

router.post('/deleteGoal', async (req, res, next) => {
    console.log(req.body.email);
    console.log(req.body.title);

    try {
        await Goal.findOneAndDelete({ email: req.body.email, title: req.body.title });
        return res.status(200).send({
            message: "Goal deleted"
        });
    } catch (e) {
        console.log("Failed to delete", req.body.email);
        return res.status(500).send({
            message: "Failed to delete goal"
        });
    }

});

router.post('/updateGoal', async (req, res, next) => {
    console.log(req.body.email);
    console.log(req.body.title);

    try {
        const goal = await Goal.findOne({ email: req.body.email, title: req.body.title });
        goal.isFinished = true;
        await goal.save();
        res.status(201).send({
            message: "Updated!"
        });
    } catch (e) {
        console.log("Failed to delete", req.body.email);
        return res.status(500).send({
            message: "Failed to update goal"
        });
    }

});

module.exports = router;