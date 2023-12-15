/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let res = 0;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    res = mid;
    if (nums[mid] > target) {
        end = mid - 1;
    }
    else if (nums[mid] < target) {
        start = mid + 1;
    }
    else {
        return mid;
    }
  }
  nums.push(target);
  nums.sort((a, b) => a - b);
  let a = nums.indexOf(target);
  return a;
}

console.log(searchInsert([1,3,5,6], 7));
