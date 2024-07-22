const Dog = require("../model/Dog");

const index = async (req, res) => {
    try {
        const dogs = await Dog.showAll();
        res.status(200).send(dogs);
    } catch(err) {
        res.status(500).send({ error: "Server error"});
    }
}

const show = async (req, res) => {
    const breed = req.params.breed.toLowerCase();

    try {
        const dog = await Dog.show(breed);
        res.status(200).send(dog);
    } catch(err) {
        res.status(404).send({error: err})
    }
}









module.exports = {index, show}