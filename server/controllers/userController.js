const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require("bcryptjs");


router.post('/register', async (req, res, next) => {
    console.log("registracija...")
    // da li user vec postoji sa datim mail-om
    const user = await User.findOne({ email: req.body.email });
    console.log(user)
    if (user) {
        return res.status(400).send({
            message: "Email already exists"
        });
    } else {
        const newUser = User({
            _id: new mongoose.Types.ObjectId,
            email: req.body.email,
            password: req.body.password
        });

        await newUser.save()
        res.status(201).send(newUser);
    }

});

router.post('/login', async (req, res) => {
    // da li user  postoji sa datim mail-om
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
        return res.status(400).send({
            message: "Email does not exist"
        });
    }

    //da li je sifra dobra
    const passwordIsEqual = await bcrypt.compare(req.body.password, user.password);
    if (!passwordIsEqual) {
        return res.status(401).send({
            message: "Wrong password"
        });
    }


    res.status(200).send({
        user,
    });
});



module.exports = router;