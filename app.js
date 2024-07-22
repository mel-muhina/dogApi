const express = require('express');
const app = express();
const dogs = require("./route/dogs")

app.get('/', (req, res) => {
    res.send("Hello doggos!");
})

app.use(express.json());
app.use('/dogs', dogs)

module.exports = app