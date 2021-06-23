class Animal {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, age); // call parent constructor
    }
    getRelativeAge() {
        return this.age * 7;
    }
}
class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    getRelativeAge() {
        return this.age * 6;
    }
}
var dog1 = new Dog("Napoleao", 4);
var cat1 = new Cat("Felix", 2);
console.log('Idade relativa de ' + dog1.name + ': ' + dog1.getRelativeAge());
console.log('Idade relativa de ' + cat1.name + ': ' + cat1.getRelativeAge());
