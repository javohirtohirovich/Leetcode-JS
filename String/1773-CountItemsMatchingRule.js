/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  let dict={"type":0,"color":1,"name":2};
  let n=0;
  for(let i=0;i<items.length;i++){
    if(items[i][dict[ruleKey]]==ruleValue){
        n++;
    }
  }
  return n;  
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"color","silver"));