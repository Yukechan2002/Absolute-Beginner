// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
var a = parseInt(userInput[0]);
var b = parseInt(userInput[1]);
var c = parseInt(userInput[2]);
if(a>b && a>c){
  console.log(a);
}
else if(b>c)
console.log(b);
else
console.log(c);

  //end-here
});
