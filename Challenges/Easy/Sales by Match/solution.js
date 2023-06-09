function sockMerchant(ar) {
  let result = 0;
  let checkedSocks = [];

  for(let i = 0; i < ar.length; i++ ) {
      let sock = ar[i];
      const pairOfSocks = ar.filter((target) => target === sock).length
      if(checkedSocks.includes(sock) === false) {
          checkedSocks.push(sock)
          if((pairOfSocks % 2) === 0) {
              result += pairOfSocks
          } else {
             result += pairOfSocks - 1
          }
      }
  }

  return result/2
}