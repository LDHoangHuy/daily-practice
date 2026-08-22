function isPalindrome(word) {
  const lower = word.toLowerCase();
  return lower === [...lower].reverse().join("");
}

function findPalindromeBreaks(words) {
  return words.reduce((acc, word, idx) => {
    if (!isPalindrome(word)) acc.push(idx);
    return acc;
  }, []);
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  const result = [];
  const phraseIndices = {};

  for (let i = 0; i + phraseLength <= words.length; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    phraseIndices[phrase] = phraseIndices[phrase] ?? [];
    phraseIndices[phrase].push(i);
  }

  for (const phrase in phraseIndices) {
    if (phraseIndices[phrase].length > 1) {
      result.push(...phraseIndices[phrase]);
    }
  }

  return result;
}

function analyzeTexts(texts, phraseLength) {
  const result = [];

  for (const words of texts) {
    const repeatedPhrases = findRepeatedPhrases(words, phraseLength);
    const palindromeBreaks = findPalindromeBreaks(words);

    result.push({
      repeatedPhrases,
      palindromeBreaks,
    });
  }

  return result;
}

console.log(analyzeTexts([["the", "cat", "tat", "the", "cat"], []], 2));
