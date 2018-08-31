const fs = require("fs");
const lines = fs.readFileSync("C-large-practice.in", "utf8").split("\n");

const numOfCases = parseInt(lines.shift());
let output = [];

for (let i = 0; i < numOfCases; i++) {
  const input = lines[i].split(' ');
  let numberOfStalls = parseInt(input[0]); // N stalls 
  let numberOfPeople = parseInt(input[1]); // numberOfPeople people are about to enter the bathroom;
  const result = solveBathroomStalls(numberOfStalls, numberOfPeople);
  output.push(`Case #${(i + 1)}: ${result[0]} ${result[1]}`);
}
fs.writeFile('output.txt', output.join("\n"));

function solveBathroomStalls(numberofStalls, numberOfPeople) {
  if (numberOfPeople == 1) {
    const arr = new Array();
    arr[0] = Math.floor(numberofStalls / 2);
    arr[1] = Math.floor((numberofStalls - 1) / 2);
    return arr;
  }
  if (numberOfPeople % 2 === 0) {
    return solveBathroomStalls(Math.floor(numberofStalls / 2), Math.floor(numberOfPeople / 2));
  }
  return solveBathroomStalls(Math.floor((numberofStalls - 1) / 2), Math.floor(numberOfPeople / 2));
}