class Parent {
    constructor(firstName, lastName, age, job, childName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job;
        this.childName = childName;
        this.child = new Child(this.firstName, this.childName)
    }
}

class Child {
    constructor(parentName, name){
        this.parentName = parentName;
        this.name = name;
    }
    askForFood(){
        console.log(`${this.parentName} can I have some food?`);
    }
}


const parent = new Parent('Natalie', 'Wright', 36, 'banker', 'Bailey');
