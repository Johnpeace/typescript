// function sum (a : number, b : number) {
//   return a + b
// }
// const answer = sum(7, 10)
// console.log(answer)
// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old. I'm only " + age;
// array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// object
var wizard = {
    a: 'John'
};
// undefined and null
var meeh = undefined;
var noo = null;
// Tuple 
var basket = ['basketball', 5];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeLength = Size.Small;
console.log(sizeLength);
// any type
var whatever = "Graceeeeeeeeeeeeeeeeeeeeee Graceeeeeeeeeeeeee";
whatever = Size.Medium;
// void
var sing = function () {
    console.log('lalallalalaalalalla');
};
// never
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT');
};
var dog = {};
dog.count;
// classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lslslslspslaa;';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAWRRRR');
console.log(lion.sing);
// union
var confused = 'ksks';
