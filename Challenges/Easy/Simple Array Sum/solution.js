function simpleArraySum(ar) {
  let sum = 0
  ar.forEach(number => sum += number)
  return sum

};

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]);
// Output ==> 31
