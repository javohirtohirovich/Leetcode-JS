/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let son = n.toString();
    if (n == 1) 
    { 
        return true 
    }  
    else 
    {
        let number_list=[];
        while(!number_list.includes(son))
        {
            number_list.push(son);
            let s=0;
            for(let i=0;i<son.length;i++){
                s+=parseInt(son[i]**2)
            }
            son=s.toString();
        }
        if(son=="1"){return true}
        else{return false}
    }
};

console.log(isHappy(7));