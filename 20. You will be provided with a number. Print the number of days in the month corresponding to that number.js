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

  
var input = parseInt(userInput[0]);
if(input >=1 && input <=12){
    if(input == 2){
        console.log("28");
    }
    else if(input%2 ===0 ||  input ==1 ){
        console.log("31");
    }
    else 
    console.log("30");
}
else
console.log("Error");

  //end-here
});
