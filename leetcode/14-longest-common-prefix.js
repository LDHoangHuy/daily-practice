/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const processedStrs = strs.toSorted();
    const result = [""];
    const [firstStr, lastStr] = [processedStrs[0], processedStrs[processedStrs.length - 1]];
    const maxLen = firstStr.length <= lastStr.length ? firstStr.length : lastStr.length;
    
    let i = 0;
    while (i < maxLen) {
        if (firstStr[i] === lastStr[i]) {
            result.push(firstStr[i]);
            i++;
        } else {
            break;
        }
    }
    return result.join("");
};
// 0ms (100%)
// 53.42MB (86.36%)
