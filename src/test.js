class Animal{
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound(){
        console.log(this.sound);
    }
}

let dog = new Animal("멍멍이", "멍멍");
console.log(Animal);
console.log(dog);
console.log(dog.makeSound());