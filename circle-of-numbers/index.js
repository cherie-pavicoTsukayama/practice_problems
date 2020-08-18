function circleOfNumbers(n, firstNumber) {
  let numberToAdd = ((n / 2));
  if (firstNumber >= numberToAdd) {
    return firstNumber - numberToAdd
  } else {
    return numberToAdd + firstNumber;
  }
}

//n - 1 because the numbers start at zero...
//store this  (n / 2) + 1
//take n add the stored number

//--create a storage for the number to add to n
//--n divided by two. Place result in storage
//--if firstNumber is >= numberToAdd
    // --then return subtract numberToAdd from firstNumber
    // --otherwise return add firstNumber to stored number
