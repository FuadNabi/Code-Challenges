var isPalindrome = function(x) {
  let num = x.toString()
  if (num[0] === '-') {
    return false
  }
  let left = 0
  let right = num.length - 1

  while(left < right) {
    if (num[left] !== num[right]) {
      return false
    }
    left++
    right--
  }
  return true
};
