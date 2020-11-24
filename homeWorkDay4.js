//bai1
function arrayCheck(arr){
    if (Array.isArray(arr)) {
        return true;
    }else{return false;}
}
console.log(arrayCheck('w3resource'));
console.log(arrayCheck([1, 2, 4, 0]));


//bai2
function cloneArray(arr){
    return arr.slice(0);
}
let arrayClone=cloneArray([1, 2, 4, 0])
console.log(arrayClone);

//bai3
function first(arr,n){    
    let arr1=[];
    if (n>arr.length) n=arr.length;
    else if (n==null) n=1;
    for (let i = 0; i < n; i++) {
       arr1.push(arr[i])
    }
    return arr1;
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//bai4
// function last(arr,n){    
//     let arr1=[];
//     if (n>arr.length) n=arr.length;
//     else if (n==null) n=1;
//     for (let i = arr.length-1; i >arr.length-1-n; i++) {
//        arr1.push(arr[i])
//     }
//     return arr1;
// }
// console.log(last([7, 9, 0, -2]));
// console.log(last([],3));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// console.log(last([7, 9, 0, -2],-3));
