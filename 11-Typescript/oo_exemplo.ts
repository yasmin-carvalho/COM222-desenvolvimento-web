class Animal
{
    name: string
    age: number
    breed: string
    constructor(name: string, age: number, breed: string)
    { 
        this.name = name
        this.age = age
        this.breed = breed
    }
    makeSound_(sound: string): void
    {
        console.log(sound)
        console.log(sound)
        console.log(sound)
    }
}

class Dog extends Animal
{
    playsFetch: boolean
    constructor(name: string, age: number, breed: string, playsFetch: boolean)
    {
         super(name, age, breed) // call parent constructor
         this.playsFetch = playsFetch
    }
    makeSound(): void
    {
        super.makeSound_('woof woof')
    }
    getAgeInHumanYears(): number
    {
        return this.age * 7    
    }
}

class Cat extends Animal
{
    constructor(name: string, age: number, breed: string)
    {
        super(name, age, breed)
    }
    makeSound(): void
    {
        super.makeSound_('meow meow')
    }
}

var dog1 = new Dog("Napoleao", 4, "Pastor Alemao", true)
var cat1 = new Cat("Felix", 2, "Angora")
dog1.makeSound()
cat1.makeSound()
