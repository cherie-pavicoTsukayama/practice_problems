class Parent {
    constructor(firstName, lastName, age, job, childName, foodCallBack){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job;
        this.childName = childName;
        this.food = 5;
        this.feedChild = this.feedChild.bind(this);
        this.foodCallBack = foodCallBack;
        this.child = new Child (this.firstName, this.childName, this.feedChild)

    }
    feedChild(){
        if(this.food){
            this.food -= 1;
            console.log(`Here ya go ${this.childName}, I have ${this.food} snacks left.`)
        } else {
            console.log(`${this.childName}, I have ${this.food} snacks, let's get more!`);
        }
    }
    askForReplenishment() {
        console.log("I'd like the snack pack please")
        setTimeout(this.foodCallBack, 2000);
        console.log('Thank you!')
    }
}
