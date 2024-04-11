import { benchMark, BenchmarkFunctions } from "npm-benchmark-ts";

interface BundleData {
	left: number[];
	right: number[];
}

export default class MergeSort {
	sort(list: number[]): number[] {
		if (list.length <= 1) return list;

		const middle = Math.floor(list.length / 2);
		let left = list.slice(0, middle);
		let right = list.slice(middle);

		return this.merge({ left: this.sort(left), right: this.sort(right) });
	}

	private merge(mergeSort: BundleData): number[] {
		const sorted: number[] = [];
		const { left, right } = mergeSort;

		while (left.length && right.length) {
			if (left[0] < right[0]) {
				sorted.push(left.shift()!);
			} else {
				sorted.push(right.shift()!);
			}
		}
		return [...sorted, ...left, ...right];
	}
}

const unsorted: number[] = [5, 3, 7, 6, 2, 9, 1, 8, 4];
const merge = new MergeSort();
const sorted = merge.sort(unsorted);
console.log("sorted", sorted);

const benchMarkFunction: BenchmarkFunctions<number[], number[]> = {
	functionDescription: "Merge Sort",
	functionUnderTest: () => merge.sort(unsorted),
	detail: "Merge Sort detail",
};

benchMark<number[], number[]>("Merge Sort", [benchMarkFunction]);
