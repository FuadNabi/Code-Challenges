def longest_common_prefix(strs)
  return "" if strs.empty?

  first_str = strs.min
  last_str = strs.max

  prefix = ""
  min_length = [first_str.length, last_str.length].min

  min_length.times do |i|

  if first_str[i] == last_str[i]
      prefix += first_str[i]
  else
      break
  end
  end

  prefix
end