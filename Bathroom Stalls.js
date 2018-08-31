const fs = require("fs");
const lines = fs.readFileSync("C-large-practice.in", "utf8").split("\n");

const numOfCases = parseInt(lines.shift());
let output = [];
// console.log(lines);

// let firstStall = 1;
// let lastStall = numberOfStalls + 2;
// let ls;
// let rs;
// if (numberOfStalls === numberOfPeople) {
//   ls = rs = 0;
// } else {
//   while (numberOfPeople > 0) {
//     numberOfPeople = Math.floor(numberOfPeople / 2)
//     // console.log(numberOfPeople);
//     // }
//     // for (let j = 0; j < numberOfPeople; j++) {
//     let middle = Math.floor((lastStall + firstStall) / 2);
//     // console.log(middle);
//     rs = lastStall - middle - 1 % 1;
//     // console.log(rs);
//     ls = middle - (firstStall + 1);
//     // console.log(ls);
//     // console.log(firstStall);
//     // console.log(lastStall);
//     if (rs >= ls) {
//       firstStall = middle;
//     } else {
//       lastStall = middle;
//     }
//   }
// }

// console.log(`${rs} ${ls}`);
// // console.assert(`${ls} ${rs}` === '1 0')
// // output += `Case #${(i + 1)}: ${Math.max(ls,rs)} ${Math.min(ls,rs)}\n`;
// console.log(`${Math.max(ls,rs)} ${Math.min(ls,rs)}`);
// }
// fs.writeFile('output.txt', output);


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