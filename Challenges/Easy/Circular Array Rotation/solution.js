function circularArrayRotation(a, k, queries) {
  let n = a.length;
  k = k % n;

  let rotatedArray = [...a.slice(n - k), ...a.slice(0, n - k)];

  return queries.map(index => rotatedArray[index]);
}
