const express = require('express');
const mongoose = require('mongoose');
const path = require("path")
const cors = require('cors');
const { check } = require('express-validator/check');
const { validationResult } = require('express-validator/check');
require('dotenv').config()
const shopRoutes = require('./routes/shop-routes');

const app = express();

const connectUrl = process.env.DB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(connectUrl, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        console.log(err)
        process.exit(1);
    }
};

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //used to parse req.body
app.use(express.static(path.join(__dirname, "client", "build")))

app.use('/shop', shopRoutes)

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.send({ message: error.message || 'An unknown error occurred!' });
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})