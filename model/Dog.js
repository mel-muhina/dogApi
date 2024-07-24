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

    static create(data) {
        const newDog = data
        newDog.id = dogs.length + 1
        dogs.push(newDog);
        return new Dog(newDog);
    }

    update(data) {
        const updatedDog = dogs.find(dog => dog.breed.toLowerCase() === this.breed.toLowerCase());
        
        if(updatedDog) {
            updatedDog.breed = data.breed
            updatedDog.nickname = data.nickname
            updatedDog.lifespan = data.lifespan
            return new Dog(updatedDog);
        } else {
            throw "Dog not found!"
        }
     }
}


module.exports = Dog;