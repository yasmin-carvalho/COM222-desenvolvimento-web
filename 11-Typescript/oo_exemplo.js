class Animal {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    makeSound_(sound) {
        console.log(sound);
        console.log(sound);
        console.log(sound);
    }
}
class Dog extends Animal {
    constructor(name, age, breed, playsFetch) {
        super(name, age, breed); // call parent constructor
        this.playsFetch = playsFetch;
    }
    makeSound() {
        super.makeSound_('woof woof');
    }
    getAgeInHumanYears() {
        return this.age * 7;
    }
}
class Cat extends Animal {
    constructor(name, age, breed) {
        super(name, age, breed);
    }
    makeSound() {
        super.makeSound_('meow meow');
    }
}
var dog1 = new Dog("Napoleao", 4, "Pastor Alemao", true);
var cat1 = new Cat("Felix", 2, "Angora");
dog1.makeSound();
cat1.makeSound();
