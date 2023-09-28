class Animal{
    protected name: string    
    //protected access specifier cannot be accessed outside the class but can be accessed inside a class hierarchy.
    
    constructor(name:string) {
        this.name=name
    }

    public move(distance:number): void{
       console.log(`${this.name} moved ${distance}m.`);
    }
}

let cat = new Animal('Cat');
cat.move(10)


class Bird extends Animal {
 fly(distance:number): void{
    console.log(`${this.name} flew ${distance}m.`);
 }
}

let bird = new Bird('Parrot')
bird.fly(15)


//by default the access specifier as used in javascript is public but,
//when private access specifier is used with a variable that variable cannot be used outside a class nor can be accessed inside a class hierarchy.