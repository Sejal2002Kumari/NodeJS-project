const fs  = require('fs').writeFileSync;
const app = require('./app');
console.log("Sub");
var a = 10;
var b = 20;
var c = 30;
console.warn(a+b+c);
console.error("y");
var v = 10;
const ch = 10;
//c = 20;
console.log(ch);
if(v==="10"){
    console.log("Matched");
}
if(v=="10"){
    console.log("matched");
}

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
    
}

const arr = [1,2,3,4,5,100,200,300,400,500,600,00]
console.log(arr);
console.log(arr[0]);
console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z);
console.log(app.q());

const arrFilter = [1,2,3,4,3,5,100,200,300,400,500,600,00]
arrFilter.filter((elements)=>{
console.log(elements);
});
var result = arrFilter.filter((elements)=>{
    return elements===3;
});
console.log(result);
var result1 = arrFilter.filter((elements)=>{
    return elements>=3;
});
console.log(result1);

function hello(){
    console.log("Hello");
}
hello();

let myHello = function (){
console.log("Hello Friends");
}
myHello();

let arrowHello = () => {
    console.log("Hello Again");
    console.log("Hiiiii.........");}
arrowHello();

let welcome = function(name){
    return `Hello and welcome to ${name}`;
}
console.log(welcome("Yahoo Baba"));

//arrow function
let arrowFun = (name,age) => {
    return `Congratulations!! ${name} You am placed in Microsoft. you are ${age} years old`;
}

let arrow = (number) => `${number} is printed on screen`;
let arrow1 = number => `${number} is printed on screen`;
console.log(arrowFun("Sejal", 22));
console.log(arrow(22));
console.log(arrow1(22));
console.log(typeof(arrowFun));
console.log(typeof arrowFun); // global module
//console is a core module

// fs.writeFileSync("hello.txt","code step by step"); // non global module
// fs.writeFileSync("Hello2.txt", " Hello friends");
// fs.writeFileSync("abc.txt", " Hello friends");
console.log(__dirname);
console.log("My file name is ",__filename);



