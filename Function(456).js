// bai4
function last(arr,n){    
    let arr1=[];
    if (n>arr.length) n=arr.length;
    else if (n==null) n=1;
    console.log(n)
    for (let i = arr.length-n; i < arr.length; i++) {
       arr1.push(arr[i])
    }
    return arr1;
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

//bai5
function join(arr){
    let s="";
    for (let i = 0; i < arr.length; i++) {
        s=s+arr[i];        
    }
    return s;
}
let myColor = ["Red", "Green", "White", "Black"];
let str=join(myColor)
console.log(str);
