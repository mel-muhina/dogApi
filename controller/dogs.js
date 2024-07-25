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

const create = async (req, res) => {
    const data = req.body;
    try {
        const newDog = await Dog.create(data)
        res.status(201).send(newDog)
    } catch(err) {
        res.status(409).send({ error: err })
    }
}

const update = async (req, res) => {
    const data = req.body;
    const breed = req.params.breed.toLowerCase()

    
      
    try {
        const dog = await Dog.show(breed)
        // console.log("checking breed", breed)
        // console.log("checking dog breed", dog.breed)
        // console.log("checking model breed", Dog.show(breed))
        if(!dog) {
            res.status(404).send({ error: "Dog not found!" })
            return;
        } 
            const updatedDog = await dog.update(data)
            res.status(200).send(updatedDog)
          
       
    } catch(err) {
        console.error("Error in update function:", err);
        res.status(500).send({ error: err })
    }
}


const destroy = async (req, res) => {
    // const data = req.body;
    const breed = req.params.breed.toLowerCase(); 
      
    try {
        const dog = await Dog.show(breed)
        const result = await dog.destroy();
     
        res.sendStatus(204)    
       
    } catch(err) {
      res.status(404).send({ error: err })
    }
}







module.exports = {index, show, create, update, destroy}