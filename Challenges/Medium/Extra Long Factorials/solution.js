function extraLongFactorials(n) {
  let result = 1n

  for(let i = n; i > 1; i--){
      result *= BigInt(i)
  }

  console.log(result.toString())
}
