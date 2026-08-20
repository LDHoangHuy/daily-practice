function myReplace(sentence, wordToBeReplaced, newWord) {
  const regex = new RegExp(wordToBeReplaced, "g");
  const upperCaseReg = /^[A-Z]/;
  const wordArr = [...newWord];
  if (upperCaseReg.test(wordToBeReplaced) !== upperCaseReg.test(newWord)) {
    wordArr[0] = upperCaseReg.test(wordToBeReplaced)
      ? wordArr[0].toUpperCase()
      : wordArr[0].toLowerCase();
  }

  return sentence.replace(regex, wordArr.join(""));
}

console.log(myReplace("His name is Tom and Tommy", "Tom", "john"));
