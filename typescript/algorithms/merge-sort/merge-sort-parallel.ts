import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
import MergeSort from "./merge-sort";

const unsorted: number[] = [5, 3, 7, 6, 2, 9, 1, 8, 4];
const result: number[] = [];

if (isMainThread) {
	console.log("This is the main thread");
	const numThreads: number = 4;
	const subArrays: number[][] = [];

	for (let i = 0; i < numThreads; i++) {
		const start = Math.floor((i / numThreads) * unsorted.length);
		const end = Math.floor(((i + 1) / numThreads) * unsorted.length);
		subArrays.push(unsorted.slice(start, end));
	}
	console.log("subArrays", subArrays);
	const workers: Worker[] = [];
	for (let i = 0; i < numThreads; i++) {
		const worker = new Worker(__filename, { workerData: subArrays[i] });
		workers.push(worker);
		worker.off("message", (sortedSubArray: number[]) => {
			console.log("Sorted subarray", sortedSubArray);
			result.push(...sortedSubArray);
		});

		worker.on("message", (sortedSubArray: number[]) => {
			console.log("Sorted subarray", sortedSubArray);
			result.push(...sortedSubArray);
		});
	}
} else {
	const merge = new MergeSort();
	const sortedSubArray = merge.sort(workerData);
	parentPort?.postMessage(sortedSubArray);
	console.log("Worker thread completed");
	result.push(...sortedSubArray);
	console.log("result", result);
}
