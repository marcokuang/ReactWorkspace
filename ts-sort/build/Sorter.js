"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // }
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.printCollection = function () {
        console.log(JSON.stringify(this.collection));
    };
    Sorter.prototype.sort = function () {
        for (var i = 0; i < this.collection.length; i++) {
            for (var j = 0; j < this.collection.length - 1 - i; j++) {
                if (this.collection.compare(j, j + 1)) {
                    // setup a type guard
                    this.collection.swap(j, j + 1);
                }
            }
        }
        this.printCollection();
    };
    return Sorter;
}());
exports.Sorter = Sorter;
//# sourceMappingURL=Sorter.js.map