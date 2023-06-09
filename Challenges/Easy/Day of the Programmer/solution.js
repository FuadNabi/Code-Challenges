function dayOfProgrammer(year) {
  let result;
  let sum = 215;

  if (year < 1918) {
    if (year % 4 === 0) {
      sum += 29;
    } else {
      sum += 28;
    }
  } else if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      sum += 29;
    } else {
      sum += 28;
    }
  } else if (year === 1918) {
    sum += 15;                                                          
  }

  result = `${256 - sum}.09.${year}`;
  return result;
}

console.log(dayOfProgrammer(2017))

// Output => 13.09.2017