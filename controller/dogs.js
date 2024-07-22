const Dog = require("../model/Dog");

const index = async (req, res) => {
    try {
        const dogs = await Dog.showAll();
        res.status(200).send(dogs);
    } catch(err) {
        res.status(500).send({ error: "Server error"});
    }
}









module.exports = {index}