/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let words = s.match(/\S+/g);
    let length = words[words.length - 1].length;
    return length;
};
