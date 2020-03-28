var calculator = {
    multiply(x,y){
        return x * y;
    },
    divide(x, y){
        return x / y;
    },
    subtract(x, y){
        return x - y;
    },
    add(x, y){
        return x + y;
    },
    average(x, y){
        return this.divide(this.add(x, y), 2);
    }

}
