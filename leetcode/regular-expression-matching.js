/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const matchStr = s.match(p) ?? [''];
    return matchStr[0].length === s.length ? true : false;
};
