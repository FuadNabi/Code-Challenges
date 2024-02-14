function cutTheSticks(arr) {
  let result = [];

  while (arr.length > 0) {
      result.push(arr.length);

      let min = Math.min(...arr);

      arr = arr.map(stick => stick - min).filter(stick => stick > 0);
  }

  return result;
}