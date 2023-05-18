def plus_one(digits)
  number = digits.join().to_i
  number += 1
  puts number
  number = number.to_s
  array = number.split('').map(&:to_i)
  array
end