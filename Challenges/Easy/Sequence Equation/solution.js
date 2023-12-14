function permutationEquation(p) {
  let result = [];
  for (let i = 1; i <= p.length; i++) {
      result.push(p.indexOf(p.indexOf(i) + 1) + 1);
  }
  
  return result;
}

console.log(permutationEquation([3,4,5,1,2]))
// Output ==> [1,3,5,4,2]
