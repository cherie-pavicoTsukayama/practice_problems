class Maker {
    constructor(parentFName, parentLName, parentAge, parentJob, parentChildName){
        this.parentFName = parentFName;
        this.parentLName = parentLName;
        this.parentAge = parentAge;
        this.parentJob = parentJob;
        this.parentChildName = parentChildName;
        this.replenishFood = this.replenishFood.bind(this);
        this.parent = new Parent(this.parentFName, this.parentLName, this.parentPage, this.parentJob, this.parentChildName, this.replenishFood)
    }
    replenishFood(){
        this.parent.food += 5;
        console.log (`Order for ${this.parentFName}, here you go!`)
    }
}
