"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var worker_threads_1 = require("worker_threads");
var merge_sort_1 = require("./merge-sort");
var unsorted = [5, 3, 7, 6, 2, 9, 1, 8, 4];
var result = [];
if (worker_threads_1.isMainThread) {
    console.log("This is the main thread");
    var numThreads = 4;
    var subArrays = [];
    for (var i = 0; i < numThreads; i++) {
        var start = Math.floor((i / numThreads) * unsorted.length);
        var end = Math.floor(((i + 1) / numThreads) * unsorted.length);
        subArrays.push(unsorted.slice(start, end));
    }
    console.log("subArrays", subArrays);
    var workers = [];
    for (var i = 0; i < numThreads; i++) {
        var worker = new worker_threads_1.Worker(__filename, { workerData: subArrays[i] });
        workers.push(worker);
        worker.off("message", function (sortedSubArray) {
            console.log("Sorted subarray", sortedSubArray);
            result.push.apply(result, sortedSubArray);
        });
        worker.on("message", function (sortedSubArray) {
            console.log("Sorted subarray", sortedSubArray);
            result.push.apply(result, sortedSubArray);
        });
    }
}
else {
    var merge = new merge_sort_1.default();
    var sortedSubArray = merge.sort(worker_threads_1.workerData);
    worker_threads_1.parentPort === null || worker_threads_1.parentPort === void 0 ? void 0 : worker_threads_1.parentPort.postMessage(sortedSubArray);
    console.log("Worker thread completed");
    result.push.apply(result, sortedSubArray);
    console.log("result", result);
}
