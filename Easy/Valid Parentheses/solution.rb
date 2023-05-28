def is_valid(s)
  stack = []
  pairs = {
    '(' => ')',
    '{' => '}',
    '[' => ']'
  }

  s.each_char do |char|
    if ['(', '{', '['].include?(char)
      stack.push(char)
    else
      top = stack.pop
      if pairs[top] != char
        return false
      end
    end
  end
  stack.empty?
end