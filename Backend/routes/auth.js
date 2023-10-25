const express = require('express');

const User = require('../models/User');


const router = express.Router();

const { body, validationResult } = require('express-validator');  // express-validator is a set of express.js middlewares that wraps the extensive collection of validators and sanitizers offered by validator.js.

const bcrypt = require('bcryptjs'); // 

var jwt = require('jsonwebtoken');
const Psychiatrist = require('../models/Psychiatrist');
const JWT_SECRET = 'Harryisagoodb$oy';

// 1. User registeration /api/auth/createuser.
router.post('/createuser', [body('name', 'Enter a valid name').isLength({ min: 3 }), body('email', 'Enter a valid email').isEmail(), body('password', 'Password must be atleast 6 characters').isLength({ min: 6 }), body('dob', 'Your age must be between 16 to 70').isDate()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        let success = false;
        if (user) {
            success = false;
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob,
            gender: req.body.gender,
            password: secPass,
        });
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// 2. Psychiatrist registeration  /api/auth/psychiatrist.
router.post('/psychiatrist', [body('name', 'Enter a valid name').isLength({ min: 3 }), body('email', 'Enter a valid email').isEmail(), body('password', 'Password must be atleast 6 characters').isLength({ min: 6 }), body('mobile', 'Enter valid mobile number.').isLength(10)], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let psychiatrist = await Psychiatrist.findOne({ email: req.body.email });
        let success = false;
        if (psychiatrist) {
            success = false;
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        psychiatrist = await Psychiatrist.create({
            name: req.body.name,
            email: req.body.email,
            experience: req.body.experience,
            age: req.body.age,
            degree: req.body.degree,
            mobile: req.body.mobile
        });
        const data = {
            psychiatrist: {
                id: psychiatrist.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// 3. Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [ body('password', 'Password cannot be blank').exists(),], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success = false
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const data = {
            
                id: user.id,
                name: user.name,
                email: user.email,
                dob: user.dob,
                gender: user.gender,
            
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, data, authtoken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// 4. Find user in database.
router.get('/findpsychiatrist', async (req, res) => {
    const { name } = req.body;
    try {
        let users = await Psychiatrist.find({ name });
        if (!users || users.length === 0) {
            return res.status(400).json({ error: "No users found with the specified name." });
        }
        const data = {
            users: users.map(user => ({
                name: user.name,
                email: user.email,
                degree: user.degree,
                age: user.age,
                mobile: user.mobile,
                experience: user.experience
            }))
        };
        res.json({ data });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router;