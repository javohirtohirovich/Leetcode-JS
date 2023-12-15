/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const RomanNumberDict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      }
      let sum=0;
      for(let i=0;i<s.length;i++){
        if(s[i]==='I'&& (s[i+1]==='V' || s[i+1]==='X')){
            sum+=RomanNumberDict[s[i+1]]-1;
            i=i+1;
        }
        else if(s[i]==='X'&& (s[i+1]==='L' || s[i+1]==='C')){
            sum+=RomanNumberDict[s[i+1]]-10;
            i=i+1;
        }
        else if(s[i]==='C'&& (s[i+1]==='D' || s[i+1]==='M')){
            sum+=RomanNumberDict[s[i+1]]-100;
            i=i+1;
        }
        else{
            sum+=RomanNumberDict[s[i]];
        }

      }
      return sum;
};
