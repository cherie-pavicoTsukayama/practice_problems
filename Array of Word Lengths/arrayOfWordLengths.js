function wordLengths(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        var wordLength = arr[i].length;
        newArray.push(wordLength);
    }
    return newArray;
}
