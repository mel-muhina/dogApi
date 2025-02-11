const express = require("express")
const router = express.Router();
const dogs = require("../controller/dogs")
const logger = require("../logger")

router.get("/", dogs.index)

router.get("/:breed", dogs.show);

router.post("/", dogs.create);

router.patch("/:breed", dogs.update);

router.delete("/:breed", dogs.destroy);

module.exports = router