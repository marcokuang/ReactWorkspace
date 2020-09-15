"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var csv = fs_1.default.readFileSync("src/football.csv", {
    encoding: "utf-8",
});
var loadData = function (csv) {
    var res = csv.split("\n").map(function (row) {
        return row.split(",");
    });
    return res;
};
console.log(JSON.stringify(loadData(csv)));
console.log("hellow___");
