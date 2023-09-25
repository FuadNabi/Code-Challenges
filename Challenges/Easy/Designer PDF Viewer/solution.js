function designerPdfViewer(h, word) {
  const letterHeights = {};
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < 26; i++) {
    letterHeights[letters[i]] = h[i];
  }

  let maxHeight = 0;

  for (let i = 0; i < word.length; i++) {

    const char = word[i];
    const height = letterHeights[char];
    maxHeight = Math.max(maxHeight, height);
  }

  return maxHeight * word.length;

}