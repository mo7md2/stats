import { CsvFileReader } from "./CsvFileReader";
let manUnitedWins = 0;
const reader = new CsvFileReader("football.csv");
reader.read();
for (let match of reader.data) {
  if (match[1] === "Manchester United FC" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] === "Manchester United FC" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(`Manchester United FC won ${manUnitedWins} games`);
