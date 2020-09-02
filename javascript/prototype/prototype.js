function Animal() {}
function Dog() {}
const myAnimal = new Animal();
const myDog = new Dog();

console.log(myAnimal.__proto__);
console.log(myDog.__proto__);

Dog.prototype.__proto__ = Animal.prototype;
