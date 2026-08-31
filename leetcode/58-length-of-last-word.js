/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let startCount = s.length - 1;

    while (startCount >= 0 && s[startCount] === " ") {
        startCount--;
    }

    while (startCount >= 0 && s[startCount] !== " ") {
        count++;
        startCount--;
    }

    return count;
};

// runtime 0 ms (100%)
// memory 52.98 MB (85.17%)
