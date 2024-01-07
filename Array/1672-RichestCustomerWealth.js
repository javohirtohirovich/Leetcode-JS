/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let arr=[];    
    for(let i=0;i<accounts.length;i++){
        arr.push(accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    }
    return arr.reduce((a, b) => Math.max(a, b), -Infinity)
};