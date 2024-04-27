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
var num = (userInput[0].split(' '));
var num1 = parseInt(num[0]);
var num2 = parseInt(num[1]);
if(num1 < num2){
    console.log(num1);
}
else
  console.log(num2);

  //end-here
});
