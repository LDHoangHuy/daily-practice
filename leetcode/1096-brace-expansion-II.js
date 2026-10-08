/**
 * @param {string} expression
 * @return {string[]}
 */

var union = function (arr) {
  const mySet = new Set(arr);
  return [...mySet];
};

var concatenate = function (arr1, arr2) {
  const result = [];
  for (const el1 of arr1) {
    for (const el2 of arr2) {
      result.push(el2 + el1);
    }
  }
  return result;
};

var braceExpansionII = function (expression) {
  const singleWordReg = /\w+/;
  const wordReg = /\w+/g;
  const markReg = /[\{\}]/g;
  const multiReg = /[\w\}]\s(?=[\w\{])/g;

  const processed1 = expression.replace(wordReg, (m) => `${m} `);
  const processed2 = processed1.replace(markReg, (m) => `${m} `);
  const processed3 = processed2.replace(multiReg, (m) => `${m}* `);
  const processed4 = processed3.replace(/,/g, "");
  const processed5 = processed4.trim().split(" ");

  const result = [];
  for (let i = 0; i < processed5.length; i++) {
    if (processed5[i] === "}") {
      let temp = [];
      while (result[result.length - 1] !== "{") {
        temp.push(result.pop());
      }
      result.pop();
      temp = union(temp);

      if (result[result.length - 1] === "*") {
        result.pop();
        let temp1 = result.pop();
        if (typeof temp1 === "string") {
          temp1 = [temp1];
        }
        temp = concatenate(temp, temp1);
      }
      if (i < processed5.length - 2 && processed5[i + 1] === "*") {
        result.push(temp);
        continue;
      }
      result.push(...temp);
    } else {
      let temp = processed5[i];
      if (
        result[result.length - 1] === "*" &&
        singleWordReg.test(temp) === true
      ) {
        result.pop();
        let temp1 = result.pop();
        if (typeof temp1 === "string") {
          temp1 = [temp1];
        }
        temp = concatenate([temp], temp1);
        if (i < processed5.length - 2 && processed5[i + 1] === "*") {
          result.push(temp);
          continue;
        } else {
          result.push(...temp);
          continue;
        }
      }

      result.push(temp);
    }
  }
  return result.sort((a, b) => a.localeCompare(b));
};

// Runtime: 13ms (18.73%)
// Memory: 61.36MB (18.99%)
