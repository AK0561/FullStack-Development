class Person {
    constructor(name,age)
    {
     this.name="Arnav Aggarwal"
     this.age=19
    }
    greeting()
    {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}

// module.exports = Person

const Person = require("./class-person")

const person1=new Person('Arnav Aggarwal',19)
person1.greeting();
