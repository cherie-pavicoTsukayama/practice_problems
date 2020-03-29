function Person (first, last, age, gender, interests){
    this.name ={
        "first": first,
        "last": last
    };
    this.age = age;
    this.gender = gender;
}

let person1 = new Person ("Bob", "Smith", 32, "male", ['music', 'skiing']);

