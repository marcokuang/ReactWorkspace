"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var myArr = new NumbersCollection_1.NumbersCollection([-5, -13, 10, -9]);
var myStr = new CharactersCollection_1.CharactersCollection("zOuAb");
var sorter = new Sorter_1.Sorter(myStr);
sorter.sort();
//# sourceMappingURL=index.js.map