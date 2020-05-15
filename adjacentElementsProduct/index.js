// eslint-disable-next-line no-unused-vars
function adjacentElementsProduct(inputArray) {
  let check = inputArray[0] * inputArray[1];

  for (let i = 0; i < inputArray.length; i++) {
    if (i === inputArray.length) {
      return check;
    } else {
      const num1 = inputArray[i];
      const num2 = inputArray[i + 1];
      const isItBigger = num1 * num2;
      if (isItBigger >= check) {
        check = isItBigger
      }
    }
  }
  return check;
}
