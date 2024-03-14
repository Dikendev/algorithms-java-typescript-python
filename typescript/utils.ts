import { SortingComparator } from "./custom-types/sorting-comparator";

export class Utils {
	public static range(start: number, end: number, step: number = 1): number[] {
		let i = start;
		let output: number[] = [];
		while (i < end) {
			output.push(i);
			i += step;
		}

		return output;
	}

	public static swapValues<T>(array: T[], from: number, to: number): void {
		const temp = array[from];
		array[from] = array[to];
		array[to] = temp;
	}

	public static modernSwapValues<T>(
		array: T[],
		from: number,
		to: number
	): void {
		[array[from], array[to]] = [array[to], array[from]];
	}

	public static lt<T>(a: T, b: T): boolean {
		return a < b;
	}

	public static gt<T>(a: T, b: T): boolean {
		return a > b;
	}

	public static eq<T>(a: T, b: T): boolean {
		return a === b;
	}
}
