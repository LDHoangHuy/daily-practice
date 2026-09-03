/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function (nums1) {
  let min = nums1[0];
  for (let i = 1; i < nums1.length; i++) {
    if (nums1[i] < min) {
      min = nums1[i];
    }
  }
  if (min % 2 === 0) {
    return !nums1.some((num) => num % 2 !== 0);
  } else {
    return true;
  }
};

// 1ms (100%)
// 71.52MB (100%)
