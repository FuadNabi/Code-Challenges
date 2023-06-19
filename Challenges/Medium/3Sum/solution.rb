def three_sum(nums)
  nums.sort.combination(3).select { |a, b, c| a + b + c == 0 }.uniq
end