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
var  kilometer = parseInt(userInput[0]);
var meter= kilometer * 1000;
var centi = meter * 100;
console.log(meter);
console.log(centi);

  //end-here
});
