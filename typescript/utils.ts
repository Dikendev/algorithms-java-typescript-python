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
}
