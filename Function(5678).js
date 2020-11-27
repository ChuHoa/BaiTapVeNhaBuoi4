//bai5
let myColor = ["Red", "Green", "White", "Black"];
let joi=myColor.join();
console.log(joi);
joi=myColor.join("+");
console.log(joi)

//bai6
let str=prompt("Enter input:");
let str1="";
for (let i = 0; i < str.length; i++) {
    if(str[i]%2==0&&str[i+1]%2==0){        
        str1=str1+str[i];
        str1=str1+"-";
    }else str1=str1+str[i];
    
}
console.log(str1);

//bai7
let str2=prompt("Enter input:");
let str3="";
for (let i = 0; i < str2.length; i++) {
    if (str2[i]>="A"&&str2[i]<="Z") {
        str3+=str2[i].toLowerCase();
    }else{
        str3+=str2[i].toUpperCase();
    }
    
}
console.log(str3);

//bài 8

let pro=0;
function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
function product(arr){
    let pro=1;
    for(let i=0;i<arr.length;i++){
        pro*=arr[i];
    }
    return pro;
}
let arr=[1,34,5,2,6,2,1]
console.log(sum(arr))
console.log(pro(arr))

