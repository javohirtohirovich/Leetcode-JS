/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) 
{
    
    let copy_candies=candies.slice();
    let mn=candies.sort((a,b)=>a-b);
    let result=copy_candies.map((x)=>x+extraCandies>=mn[mn.length-1]);
    return result;
};

console.log(kidsWithCandies([2,3,5,1,3],3));