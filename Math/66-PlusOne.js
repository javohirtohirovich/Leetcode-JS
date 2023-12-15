var plusOne = function(digits) {
    let son = "";
    for (let i = 0; i < digits.length; i++) {
        son += digits[i].toString();
    }

    son = (BigInt(son) + BigInt(1)).toString(); // Bu qat'iy qismi o'zgardi

    digits = [];
    for (let i = 0; i < son.length; i++) {
        digits.push(parseInt(son[i]));
    }
    return digits;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
