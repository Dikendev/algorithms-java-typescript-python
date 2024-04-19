"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var MergeSort = /** @class */ (function () {
    function MergeSort() {
    }
    MergeSort.prototype.sort = function (list) {
        if (list.length <= 1)
            return list;
        var middle = Math.floor(list.length / 2);
        var left = list.slice(0, middle);
        var right = list.slice(middle);
        return this.merge({ left: this.sort(left), right: this.sort(right) });
    };
    MergeSort.prototype.merge = function (mergeSort) {
        var sorted = [];
        var left = mergeSort.left, right = mergeSort.right;
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                sorted.push(left.shift());
            }
            else {
                sorted.push(right.shift());
            }
        }
        return __spreadArray(__spreadArray(__spreadArray([], sorted, true), left, true), right, true);
    };
    return MergeSort;
}());
exports.default = MergeSort;
// const unsorted: number[] = [5, 3, 7, 6, 2, 9, 1, 8, 4];
// const merge = new MergeSort();
// const sorted = merge.sort(unsorted);
// console.log("sorted", sorted);
// const benchMarkFunction: BenchmarkFunctions<number[], number[]> = {
// 	functionDescription: "Merge Sort",
// 	functionUnderTest: () => merge.sort(unsorted),
// 	detail: "Merge Sort detail",
// };
// benchMark<number[], number[]>("Merge Sort", [benchMarkFunction]);
