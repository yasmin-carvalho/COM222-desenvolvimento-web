class Dog {
    get name() {
        return this._name;
    }
    set name(name) {
        if (!name || name.length > 20) {
            throw new Error('Name invalid');
        }
        else {
            this._name = name;
        }
    }
}
class PetStore {
    constructor() {
        this._dogs = [new Dog(), new Dog()];
        this._dogs[0].name = 'Fido'; // chama o 'set'
        this._dogs[1].name = 'Leopoldo'; // chama o 'set'
    }
    printAllDogNames() {
        this._dogs.forEach(dog => {
            console.log(dog.name); // chama o 'get'
        });
    }
}
var ps = new PetStore();
ps.printAllDogNames();
