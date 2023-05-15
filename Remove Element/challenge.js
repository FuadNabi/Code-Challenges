var removeElement = function(nums, val) {
  const arr = nums.filter(num => num !== val)
  nums.length = 0
  arr.forEach((element) => {
    if (element !== val) {
      nums.push(element);
    }
  });
  let k = arr.length
  return k
};