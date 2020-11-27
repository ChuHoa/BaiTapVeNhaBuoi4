//bai1
let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
for(key in student){
    console.log(key);
}

//bai2
delete student.rollno;
console.log(student);

//bai3

function count(obj){
    let sumO=0;
    for(key in obj){
        sumO+=1;
    }        
    return sumO;  
}

console.log(count(student));

// bai4
let library=[
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    } 
];
for (let i=0; i<library.length;i++){
    console.log(library[i].author+" : "+library[i].readingStatus);
} 

//bai5
function clock(){
    let currentDate=new Date();
    let hour=currentDate.getHours();
    let minutes=currentDate.getMinutes();
    let seconds=currentDate.getSeconds();
    console.log(hour+" : "+minutes+" : "+seconds);
}
clock();
    
