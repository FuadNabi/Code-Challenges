function pickingNumbers(a) {
  let array = {};
  let maxCount = 0;

  for (let num of a) {
      if (!arrayay[num]) {
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
