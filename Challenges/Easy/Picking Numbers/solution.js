function pickingNumbers(a) {
  let array = {};
  let maxCount = 0;

  for (let num of a) {
      if (!array[num]) {
          array[num] = 1;
      } else {
          array[num]++;
      }
  }

  for (let num in array) {
      num = parseInt(num);
      let count = array[num] + (array[num + 1] || 0);
      if (count > maxCount) {
          maxCount = count;
      }
  }

  return maxCount;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))
// Output ==> 3

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]))
// Output ==> 5