function largestNumber(n) {
  let numberString = '';
  for (let i = 0; i < n; i++) {
    numberString = numberString + '9';
  }
  return parseInt(numberString);
}
