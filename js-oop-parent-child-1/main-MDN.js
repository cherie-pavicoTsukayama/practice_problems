function Person(first, last, age, gender, interests){
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function(){
        if(this.gender === 'male'){
            this.gender = 'He';
        } else {
            this.gender = 'She';
        }
        alert(`${this.name.first} ${this.name.last} is ${this.age} years old. ${this.gender} likes ${this.interests}.`)
    };
    this.greeting = function() {
        alert(`Hi! I'm ${this.name.first}.`);
    }
}

let person1 = new Person ('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
let person2 = new Person ('Sarah', 'Jane', 30, 'female', ['jumping', 'singing', 'running']);
