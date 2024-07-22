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
}


module.exports = Dog;