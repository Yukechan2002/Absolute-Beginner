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
var year = parseInt(userInput[0]);
 if ((year%4 ==0 && year % 100!=0) || (year % 400 == 0)){
     console.log("Y");
 }
     else
     console.log("N");

  //end-here
});
