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

var input1 = parseFloat(userInput[0]);
var input2= parseFloat(userInput[1]);
var output = input1+input2;
console.log(output.toFixed(1));


  //end-here
});
