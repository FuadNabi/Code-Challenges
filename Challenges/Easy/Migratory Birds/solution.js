function migratoryBirds(arr) {
  const counts = {};

  for (let i = 0; i < arr.length; i++) {
    const birdType = arr[i];
    counts[birdType] = (counts[birdType] || 0) + 1;
  }

  let maxCount = 0;
  let maxType = 0;
  for (const [birdType, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      maxType = birdType;
    } else if (count === maxCount && birdType < maxType) {
      maxType = birdType;
    }
  }

  return maxType;

}