/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let n=0;
    for(let i=0;i<sentences.length;i++){
        if(sentences[i].match(/\S+/g).length>n){
            n=sentences[i].match(/\S+/g).length;
        }
    }
    return n;
};