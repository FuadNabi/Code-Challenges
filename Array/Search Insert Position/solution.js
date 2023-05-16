var searchInsert = function(nums, target) {
  const index = nums.indexOf(target);
  if(index === -1) {
      for(let i = 0; i< nums.length; i++) {
          let number = nums[i];
          if (number > target) {
              return nums.indexOf(number)
          } else if(nums[nums.length - 1]< target) {
              return nums.indexOf(nums[nums.length - 1]) + 1
          }
      }
  } else {
      return index
  }
};