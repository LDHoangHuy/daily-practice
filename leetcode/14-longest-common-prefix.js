/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let resultPrefix = strs[0];
    let endIdx = strs[0].length - 1;
    for (let i = 1; i < strs.length; i++) {
        let temp = -1;
        for (let j = 0; j < strs[i].length && j < resultPrefix.length; j++) {
            if (strs[i][j] === resultPrefix[j]) {
                temp = j;
            } else {
                break;
            }
        }
        if (temp < endIdx) {
            endIdx = temp;
        }
        if (endIdx === -1) {
            break;
        }
    }
    return resultPrefix.slice(0, endIdx + 1);
};
// 4ms (25.18%)
// 56.13MB (19.38%)
