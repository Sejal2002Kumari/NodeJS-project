//Node is Asyncronus programming language

console.log("Start execution");
setTimeout(()=>{
    console.log("logic execution");
},1000);

console.log("complete execution");


//drawback 

let a = 10;
let b = 0;
setTimeout(()=>{
    b = 20;
},2000);
console.log(a+b);