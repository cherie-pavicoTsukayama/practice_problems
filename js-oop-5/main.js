class Car {
    constructor(make, model, weight, horsePower, color, doors){
        this.make = make;
        this.model = model;
        this.weight = weight;
        this.horsePower = horsePower;
        this.color = color;
        this.doors = doors;
    }
    overview(){
        console.log(`The cars make and model is ${this.make} ${this.model}.`);
    }
    specs() {
        console.log(`The car weighs ${this.weight} and has ${this.horsePower}.`)
    }
    deisgn() {
        console.log(`The cars color is ${this.color} and has ${this.doors} doors.`)
    }
    is2door(){
        return this.doors === 2;
    }
    addHorsePower (power){
        return this.horsePower + power;
    }
    reduceHorsePower(power){
        return this.horsePower - power;
    }
    }

const fiat = new Car('fiat', 500, '500kg', 200, 'white', 4);
fiat.overview();
fiat.specs();
fiat.deisgn();
