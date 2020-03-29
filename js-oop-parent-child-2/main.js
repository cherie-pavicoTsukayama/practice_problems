class Parent {
    constructor(firstName, lastName, age, job, childName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job;
        this.childName = childName;
        this.food = 5;
        //So what we're saying below is that the property feedchild on this object ('this' keyword pointing to the assigned object at instantiation) is being bound to the object that it was instantiated on. So if the object that was created was mama its saying mama's feedChild method is bound to mama. and being assigned to the property 'feedChild' on mama.
        this.feedChild = this.feedChild.bind(this);
        this.child = new Child(this.firstName, this.childName, this.feedChild)

    }
    feedChild(){
        if(this.food){
            this.food -= 1;
            console.log(`Sure ${this.childName}. Here ya go. I have ${this.food} snacks left.`)
        } else (
            console.log(`${this.childName}, we have no snacks left, we have to get more.`)
        )
    }
}

class Child {
    constructor(parentName, name, feedMeCallBack){
        this.parentName = parentName;
        this.name = name;
        this.feedMeCallBack = feedMeCallBack;
    }
    askForFood(){
        console.log(`${this.parentName} can i have some foods?`);
        this.feedMeCallBack();
    }
}

const parent = new Parent('Natalie', 'Wright', 36, 'Banking', 'Bailey');
