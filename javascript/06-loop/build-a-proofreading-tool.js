function isPalindrome(word) {
  const lowerCasedWord = word.toLowerCase();
  return lowerCasedWord === lowerCasedWord.split("").reverse().join("");
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
  if (phraseLength >= words.length) {
    return [];
  }

  const result = [];
  const phraseIndices = {};

  for (let i = 0; i + phraseLength <= words.length; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (phraseIndices[phrase]) {
      phraseIndices[phrase].push(i);
    } else {
      phraseIndices[phrase] = [i];
    }
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
