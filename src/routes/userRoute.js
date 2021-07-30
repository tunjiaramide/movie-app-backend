const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//Register
router.post('/register', async(req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        const user = await newUser.save()
        return res.status(201).json(user);

    } catch(err) {
        res.status(500).json(err)
    }
})

// Login and Jwt
router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username})
        if(!user) return res.status(400).json("Wrong credentials1")

        const validated = await bcrypt.compare(req.body.password, user.password)
        if(!validated) return res.status(400).json("Wrong credentials2")

        const jwtUser = { username: user.username };
        const token = jwt.sign(jwtUser, process.env.ACCESS_TOKEN, { expiresIn: '1h' });

        return res.status(200).json({"token_key": token});
    }catch(err) {
        res.status(500).json(err)
    }
})



module.exports = router;


