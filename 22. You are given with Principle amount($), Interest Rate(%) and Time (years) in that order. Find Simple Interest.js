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

var inputs = (userInput[0].split(' '));

var p = parseFloat(inputs[0]);
var i = parseFloat(inputs[1]);
var t = parseFloat(inputs[2]);
var si = p * i*t/100;
console.log(si.toFixed(2));

  //end-here
});
