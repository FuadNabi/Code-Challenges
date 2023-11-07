/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  let result = []
  for( let i = 0; i < nums.length; i++) {
      result.push(nums[nums[i]])
  }
  return result
};

console.log(buildArray([0,2,1,5,3,4]))
// Output ==> [0,1,2,4,5,3] 