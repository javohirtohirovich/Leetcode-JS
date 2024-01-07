/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    s=0;
    for(let i=0;i<operations.length;i++){
        if(operations[i]=="--X" || operations[i]=="X--"){
            s-=1;
        }
        else if(operations[i]=="++X" || operations[i]=="X++"){
            s+=1;
        }
    }
    return s;
};

console.log(finalValueAfterOperations(["--X","X++","X++"]));