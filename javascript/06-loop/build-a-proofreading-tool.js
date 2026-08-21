function isPalindrome(word) {
  return word === word.split("").reverse().join("")
}

function findPalindromeBreaks(words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      result.push(i);
    }
  }
  return result;
}

function findRepeatedPhrases(words, phraseLength) {
  
}

function analyzeTexts(texts, phraseLength) {

}
