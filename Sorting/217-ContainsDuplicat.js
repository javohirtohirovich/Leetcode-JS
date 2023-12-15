/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let nums2=nums.copyWithin();
    nums2=new Set(nums2);
    if(nums2.size==nums.length){return false;}
    else {return true;}
};
