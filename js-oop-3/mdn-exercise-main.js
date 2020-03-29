function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        // First define a string, and make it equal to the part of
        // the bio that we know will always be the same.
        var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
        // define a variable that will contain the pronoun part of
        // the second sentence
        var pronoun;

        // check what the value of gender is, and set pronoun
        // to an appropriate value in each case
        if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
            pronoun = 'He likes ';
        } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
            pronoun = 'She likes ';
        } else {
            pronoun = 'They like ';
        }

        // add the pronoun string on to the end of the main string
        string += pronoun;

        // use another conditional to structure the last part of the
        // second sentence depending on whether the number of interests
        // is 1, 2, or 3
        if (this.interests.length === 1) {
            string += this.interests[0] + '.';
        } else if (this.interests.length === 2) {
            string += this.interests[0] + ' and ' + this.interests[1] + '.';
        } else {
            // if there are more than 2 interests, we loop through them
            // all, adding each one to the main string followed by a comma,
            // except for the last one, which needs an and & a full stop
            for (var i = 0; i < this.interests.length; i++) {
                if (i === this.interests.length - 1) {
                    string += 'and ' + this.interests[i] + '.';
                } else {
                    string += this.interests[i] + ', ';
                }
            }
        }

        // finally, with the string built, we alert() it
        alert(string);
    };
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
};

let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

Person.prototype.farewell = function() {
    alert(this.name.first + ' has left the building. Bye for now!');
}


class Shape {
    constructor(name, side, sideLength){
        this.name = name;
        this.side = side;
        this.sideLength = sideLength;
    }
    calcPerimeter (side, sideLength) {
        console.log(side * sideLength);
    }
}

var square = new Shape('square', 4, 5);
var triangle = new Shape('triangle', 3, 3);

class Square extends Shape {
    constructor(sideLength){
        super();
        this.name = 'square';
        this.side = 4;
        this.sideLength = sideLength;
    }
    calcArea(sideLength){
        console.log(sideLength * sideLength)
    }
}

var square2 = new Square('5');

var obj = {};
var string = "";
var arr = [];

var obj2 = {
    name: "Scott Bowler",
    hobbies: "Diet Coke"
}

var emptyObject = Object.create(null);
var carInfoPrototype = {
    overview: function () {
        console.log('The cars make and model is ' + this.make + ' ' + this.model)
    },
    specs: function () {
        console.log('The car weighs ' + this.weight + ' and has ' + this.horsePower + ' horsepower')
    },
    design: function () {
        console.log('The cars color is ' + this.color + ' and has ' + this.doors + ' doors.')
    }
}

var carInfo = Object.create(carInfoPrototype)
console.log(carInfo);

var fiat = Object.create(carInfoPrototype);
fiat.make = 'fiat';
fiat.model = '500';
fiat.weight = '500kg';
fiat.horsePower = 200;
fiat.color = 'white';
fiat.doors = 4;
fiat.overview();
fiat.specs();
fiat.design();

