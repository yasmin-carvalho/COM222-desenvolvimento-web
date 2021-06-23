abstract class Animal
{
    private _name: string
    private _age: number
    constructor(name: string, age: number)
    { 
        this._name = name
        this._age = age       
    }
    get name(): string
    {
        return this._name
    }
    get age(): number
    {
        return this._age
    }
    abstract getRelativeAge(): number;
}

class Dog extends Animal
{
    constructor(name: string, age: number)
    {
         super(name, age) // call parent constructor
    }
    getRelativeAge(): number
    {
        return this.age * 7    
    }
}

class Cat extends Animal
{
    constructor(name: string, age: number)
    {
        super(name, age)
    }
    getRelativeAge(): number
    {
        return this.age * 6    
    }    
}

var dog1 = new Dog("Napoleao", 4)
var cat1 = new Cat("Felix", 2)
console.log('Idade relativa de ' + dog1.name + ': ' + dog1.getRelativeAge())
console.log('Idade relativa de ' + cat1.name + ': ' + cat1.getRelativeAge())


