function viralAdvertising(n) {
  let shared = 5;
  let liked = 0;
  let totalLikes = 0;

  for (let i = 1; i <= n; i++) {
    liked = Math.floor(shared / 2);
    totalLikes += liked;
    shared = liked * 3;
  }

  return totalLikes;
}