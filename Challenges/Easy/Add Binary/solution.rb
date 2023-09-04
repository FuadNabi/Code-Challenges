def add_binary(a, b)
  sum = a.to_i(2)+b.to_i(2)
  sum.to_s(2)
end

// p add_binary( 1, 11) ==> 100
