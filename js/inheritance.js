// Parent Class
var Mammal = function(name) {
    this.name = name;
    this.offspring = [];
}

Mammal.prototype.haveABaby = function() {
    var newBaby = new Mammal("Baby " + this.name);
    this.offspring.push(newBaby);
    return newBaby;
}

Mammal.prototype.toString = function() {
    return '[Mammal "' + this.name + '"]';
}

// Child Class
var Cat = function(name) {
    this.name = name;
}

Cat.prototype = new Mammal();
Cat.prototype.constructor = Cat;

Cat.prototype.toString = function() {
    return '[Cat "' + this.name + '"]';
}

// Demo
var someAnimal = new Mammal('Mr. Biggles');
var myPet = new Cat('Felix');

console.log('someAnimal is ' + someAnimal);
console.log('myPet is ' + myPet);

myPet.haveABaby();

console.log(myPet.offspring.length);
console.log(myPet.offspring[0]);

// Mammal
console.log(someAnimal);

// Cat
console.log(myPet);
