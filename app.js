const express = require('express');
const app = express();
const cors = require("cors")

const dogs = require("./route/dogs")
const logger = require("./logger")

app.get('/', (req, res) => {
    res.send("Hello doggos!");
})

app.use(express.json());
app.use(cors())
app.use('/dogs', dogs)
app.use(logger)

module.exports = app