class Animal2 {
    public name:string //we can use readonly keyword so that it can act as an access modifier with public and we cannot access the name property outside this class.
    constructor(name:string){
        this.name=name;
    }
}
const sheep = new Animal2('Sheep')
console.log(sheep.name)
sheep.name='Wolf'