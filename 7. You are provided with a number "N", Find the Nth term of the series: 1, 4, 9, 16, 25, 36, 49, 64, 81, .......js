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

var Input = parseInt(userInput[0]);
var output = Input * Input;
if(Input === 0){
    console.log(0);
}
if(Input<0){
    console.log("Error");
}
if(Input >0)
console.log(output);

  //end-here
});
