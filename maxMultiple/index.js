function maxMultiple(divisor, bound) {
  let maxNumber = 0;
  for (let i = 1; i <= bound; i++) {
    if (i % divisor === 0 && i > 0) {
      if (i > maxNumber) {
        maxNumber = i;
      }
    }
  }
  return maxNumber;
}


//•create a storage equal to 0
//•loop through some numbers that are less than or equal to bound
    //•if n divided by the divisor with out a remainder && n is greater than zero than
        //•if i is greater than storage
            //•then storage is now i
//•return storage
