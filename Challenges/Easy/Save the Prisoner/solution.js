function saveThePrisoner(n, m, s) {
  let turn = (s + m - 1) % n;

  if (turn === 0) {
      turn = n;
  }

  return turn;
}
