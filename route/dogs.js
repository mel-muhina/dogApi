const express = require("express")
const router = express.Router();
const dogs = require("../controller/dogs")
const logger = require("../logger")

router.get("/", dogs.index)

router.get("/:breed", dogs.show);

router.post("/", dogs.create);

router.patch("/:name", dogs.update);

// router.delete("/:name", dogs.destroy);

module.exports = router