function countingValleys(steps, path) {
  let count = 0
  let hike = 0
  const arr = path.split('')
  console.log(arr[0])
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'U') {
          count++;
          if (count === 0) {
              hike++;
          }
      } else {
          count--;
      }
  }
 return hike
}