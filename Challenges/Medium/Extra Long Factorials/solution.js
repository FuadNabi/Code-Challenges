function extraLongFactorials(n) {
  let result = 1n

  for(let i = n; i > 1; i--){
      result *= BigInt(i)
  }

  console.log(result.toString())
}

console.log(extraLongFactorials(25))
// Output ==> 15511210043330985984000000
