let arr = [-2,-3,1,4,7,3,5,-9,24,1,5,8];

let result = arr.reduce((min, el) => {
    if(min>el){
        return el;
    } else{
        return min;
    }
});
console.log(result);

