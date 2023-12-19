/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  image=image.map(x=>x.reverse())
  for(let i=0;i<image.length;i++){
    image[i]=image[i].map(x=>{
        if(x==1) return --x;
        else return ++x;
    })
  }
  return image  
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));