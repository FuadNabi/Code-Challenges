def merge_two_lists(list1, list2)
  array = []

  current = list1
  while current
    array.push(current.val)
    current = current.next
  end

  current = list2
  while current
    array.push(current.val)
    current = current.next
  end

  array.sort
end