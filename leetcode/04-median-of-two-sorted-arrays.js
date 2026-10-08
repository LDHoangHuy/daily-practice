/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedNums = [];
  let i = 0;
  let j = 0;
  let k = 0;
  let m = nums1.length;
  let n = nums2.length;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      mergedNums[k] = nums1[i];
      i++;
    } else {
      mergedNums[k] = nums2[j];
      j++;
    }
    k++;
  }

  while (i < m) {
    mergedNums[k] = nums1[i];
    i++;
    k++;
  }

  while (j < n) {
    mergedNums[k] = nums2[j];
    j++;
    k++;
  }

  let median;
  if ((m + n) % 2 === 0) {
    const idx = (m + n) / 2;
    median = (mergedNums[idx - 1] + mergedNums[idx]) / 2;
  } else {
    median = mergedNums[Math.floor((m + n) / 2)];
  }

  return median;
};

// Runtime: 1ms (99.12%)
// Memory: 59.74MB (36.55%)
