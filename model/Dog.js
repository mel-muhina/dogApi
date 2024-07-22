const dogs = require("../dogs.json");


class Dog {
    constructor(dog) {
        this.breed = dog.breed;
        this.nickname = dog.nickname;
        this.lifespan = dog.lifespan;
    }

    static showAll() {
        return dogs.map(q => new Dog(q));
    }

    static show(breed) {
        const dog = dogs.find((dog) => dog.breed.toLowerCase() == breed);

        if (dog) {
            return new Dog(dog);
        } else {
            throw "The dog breed doesn't exist.";
        }
    }
}


module.exports = Dog;