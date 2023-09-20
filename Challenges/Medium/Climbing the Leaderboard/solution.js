function climbingLeaderboard(ranked, player) {

  let ranksArr = [...new Set(ranked)]
  let result = []

  for ( let j = 0; j < player.length; j++ ){

      for ( let k = 0; k < ranksArr.length; k++ ){

          if ( player[j] < ranksArr[ranksArr.length - 1]) {
              result.push(ranksArr.length + 1)
              break
          } else if ( player[j] >= ranksArr[k]) {
              result.push(k+1)
              break
          }
      }
  }

  return result
}

console.log (climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))
// OUTPUT ==> [6, 4, 2, 1]