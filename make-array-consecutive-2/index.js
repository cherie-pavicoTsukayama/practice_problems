function makeArrayConsecutive2(statues) {
  const sortedArray = statues.sort()
  let counter = 0;
  for (var i = 0; i < sortedArray.length; i++) {
    let currentItem = sortedArray[i];
    let nextNumber = sortedArray[i + 1];
    if (nextNumber === undefined) {
      return counter;
    }
    counter = counter + (nextNumber - currentItem) - 1;
  }
  return counter;
}
