function makeArrayConsecutive2(statues) {
  const sortedArray = statues.sort((a, b) => a - b)
  let counter = 0;
  for (var i = 0; i < sortedArray.length; i++) {
    let currentItem = sortedArray[i];
    let nextNumber = sortedArray[i + 1];
    if (nextNumber === undefined) {
      return counter;
    } else if ((currentItem + 1) === nextNumber) {
      counter + 0;
      console.log(sortedArray)
    } else {
      counter = counter + (nextNumber - currentItem) - 1;
    }
  }
  return counter;
}   
