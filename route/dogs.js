const express = require("express")
const router = express.Router();
const dogs = require("../controller/dogs")

router.get('/', dogs.index)

router.get("/:breed", dogs.show);

module.exports = router