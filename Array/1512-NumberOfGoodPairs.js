/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let s=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length-1;j++){
            if(nums[i]==nums[j+1]){
                s++;
            }
        }
    }
    return s;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));