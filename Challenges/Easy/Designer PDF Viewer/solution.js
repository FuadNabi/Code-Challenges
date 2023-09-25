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

const heights = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 1, 1, 3, 1, 4, 1, 4, 3, 4, 3, 4, 1, 4, 1, 3, 1];
const word = "abc";
const result = designerPdfViewer(heights, word);

console.log(result); // Output: 9
