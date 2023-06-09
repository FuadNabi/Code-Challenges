var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      let currentNumber = nums[i];
      let secondNumber = target - currentNumber;
      let secondNumberIndices = [];
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] === secondNumber) {
              secondNumberIndices.push(j);
          }
      }
      if (secondNumberIndices.length > 0) {
          return [i, secondNumberIndices[0]];
      }
  }
};