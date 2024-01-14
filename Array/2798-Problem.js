/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    hours=hours.filter((x)=>x>=target);
    return hours.length;    
};

console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4],2));