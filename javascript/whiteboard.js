// Scratch pad
var arrayLike = {0: 'oh', 1: 'my', 2: 'god', length: 3};
var arr = Array.prototype.map.bind(arrayLike)(el => el);
var arr = Array.prototype.reduce.bind(arrayLike)((acc, el) => (acc + el));
// var string = 'hi there!';
// var arr = Array.prototype.map.bind(string)(el => el + 'x');

console.log(arr);

function Person(name, age) {
  this.getAge = function() {
    console.log(age);
  };

  this.getName = function() {
    console.log(name);
  };

  this.setAge = function(num) {4
    age = num;
    console.log(age);
  };

  this.setName = function(str) {
    name = str;
    console.log(name);
  };
}


// let Dave = new Person('Dave', 24)
// Dave.getAge()
// Dave.setAge(10)
// Dave.getAge()
//
// Dave.getName()
// Dave.setName('John')
// Dave.getName()

// let dude = new Person('guy', 24);
// dude.getAge()
// dude.getName()
// dude.setAge(40)
// dude.setName('bro')
// dude.getAge()
// dude.getName()
