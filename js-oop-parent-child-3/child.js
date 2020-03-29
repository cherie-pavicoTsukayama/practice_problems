class Child {
    constructor(parentName, name, feedMeCallBack) {
        this.parentName = parentName;
        this.name = name;
        this.feedMeCallBack = feedMeCallBack;
    }
    askForFood() {
        console.log(`${this.parentName} can i have some foods?`);
        this.feedMeCallBack();
    }
}
