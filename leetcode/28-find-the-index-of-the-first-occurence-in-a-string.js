/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const regex = new RegExp(needle);
    if (!regex.test(haystack)) {
        return -1;
    }
    return haystack.match(regex).index;
};
