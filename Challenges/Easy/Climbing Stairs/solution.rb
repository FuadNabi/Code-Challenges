def climb_stairs(n, memo = {})
  return 1 if n <= 1
  return 2 if n == 2

  return memo[n] if memo.key?(n)

  memo[n] = climb_stairs(n - 1, memo) + climb_stairs(n - 2, memo)
end