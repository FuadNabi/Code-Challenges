var removeDuplicates = function(nums) {
  let arr = []
  let prevNum
  let k = 0
for(let i = 0; i < nums.length; i++) {
  let newNum = nums[i]
  if (prevNum === newNum) {
      continue
  } else {
      prevNum = newNum
      arr.push(newNum)
      k++
  }
}
nums.unshift(...arr)
return k
};