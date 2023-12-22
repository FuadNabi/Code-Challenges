function jumpingOnClouds(c, k) {
  let energy = 100;
  let index = 0;
  const length = c.length;

  do {
      index = (index + k) % length;
      energy -= c[index] === 1 ? 3 : 1;
  } while (index !== 0);

  return energy;

}