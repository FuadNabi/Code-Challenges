var groupAnagrams = function(strs) {
  const map = new Map()

  for( let str of strs) {
      const sort =str.split('').sort().join('');
      if(map.has(sort)){
          map.get(sort).push(str)
      } else {
          map.set(sort, [str])
      }
  }
  return Array.from(map.values());
};