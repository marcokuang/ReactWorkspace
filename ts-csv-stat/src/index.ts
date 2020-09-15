import { readFileSync } from "fs";

import fs from "fs";
import path from "path";

const csv = fs.readFileSync("src/football.csv", {
  encoding: "utf-8",
});

const loadData = (csv: string): string[][] => {
  const res: string[][] = csv.split("\n").map((row: string): string[] => {
    return row.split(",");
  });

  return res;
};

console.log(JSON.stringify(loadData(csv)));

console.log("hellow___");
