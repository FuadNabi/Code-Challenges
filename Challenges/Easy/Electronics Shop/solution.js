function getMoneySpent(keyboards, drives, b) {
  keyboards.sort((a, b) => a - b)
  drives.sort((a, b) => a - b)
  let maxSpent = -1;
  let kLength = keyboards.length
  
  for(let i = 0; i <= keyboards.length; i++){
      for(let j = 0; j < drives.length; j++) {
          const totalPrice = keyboards[kLength - i] + drives[j];
          if (totalPrice <= b && totalPrice > maxSpent) {
              maxSpent = totalPrice;
          }
      }
  }
  return maxSpent
}