

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