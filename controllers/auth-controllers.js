const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');
require('dotenv').config()

const User = require('../models/user');

const register = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, username, password } = req.body;

        let user = new User({
            username,
            email,
            password
        });

        //encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const fullUser = await User.findOne({ username: req.body.username })

        user = await User.findOne({ username: username })

        const payload = {
            user: {
                id: user.id
            }
        };

        //return jsonwebtoken
        jwt.sign(
            payload,
            process.env.jwtSecret,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.send({ token, user });
            }
        );

    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }

}

const login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let fullUser = await User.findOne({ username: username })

        if (fullUser) {
            const isMatch = await bcrypt.compare(password, fullUser.password);

            if (isMatch) {
                const user = await User.findOne({ username: username }).select('-password');

                const payload = {
                    user: {
                        id: user.id
                    }
                };

                jwt.sign(
                    payload,
                    process.env.jwtSecret,
                    { expiresIn: 360000 },
                    (err, token) => {
                        if (err) throw err;
                        res.send({ token, user });
                    }
                );
            } else {
                const error = new Error("Invalid")
                res.status(401)
                throw error
            }
        } else {
            const error = new Error("Invalid")
            res.status(401)
            throw error
        }
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}


exports.register = register;
exports.login = login;