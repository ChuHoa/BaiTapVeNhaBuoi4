//bai1
function arraycheck(arr){
    if (Array.isArray(arr)) {
        return true;
    }else{return false;}
}
console.log(arraycheck('w3resource'));
console.log(arraycheck([1, 2, 4, 0]));