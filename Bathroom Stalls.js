const fs = require("fs");
const lines = fs.readFileSync("C-small-practice-1.in", "utf8").split("\n");

const numOfCases = lines.shift();
const results = [];
console.log(lines);

for (let i = 0; i < 1; i++) {
  const input = lines[i].split(' ');
  const n = parseInt(input[0]); // N stalls 
  const k = parseInt(input[1]); // K people are about to enter the bathroom;
  let firstStall = 1;
  let lastStall = n + 2;
  let ls;
  let rs;

  for (let j = 0; j < k; j++) {
    let middle = Math.floor((lastStall + firstStall) / 2);
    console.log(middle);
    rs = lastStall - middle - 1;
    console.log(rs);
    ls = middle - (firstStall + 1);
    console.log(ls);
    console.log(firstStall);
    console.log(lastStall);
    if (rs >= ls) {
      firstStall = middle;
    } else {
      lastStall = middle;
    }
  }
  console.log(`${rs} ${ls}`);
  // console.assert(`${ls} ${rs}` === '1 0')
  // results.push(`Case # ${i+1}: ${rs} ${ls}`);
}
// fs.writeFileSync("B.out", results.join("\n"));