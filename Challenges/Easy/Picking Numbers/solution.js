function pickingNumbers(a) {
  let arr = {};
  let maxCount = 0;
  
  for (let num of a) {
      if (!arr[num]) {
          arr[num] = 1;
      } else {
          arr[num]++;
      }
  }

  for (let num in arr) {
      num = parseInt(num);
      let count = arr[num] + (arr[num + 1] || 0);
      if (count > maxCount) {
          maxCount = count;
      }
  }
  
  return maxCount;
}